import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { transporter, jobApplicationNotificationEmail, applicantConfirmationEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const position = formData.get('position') as string;
    const category = formData.get('category') as string;
    const experience = formData.get('experience') as string;
    const message = formData.get('message') as string;
    const resumeFile = formData.get('resume') as File;

    if (!fullName || !email || !resumeFile) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Upload Resume to Supabase Storage
    const fileName = `${Date.now()}-${resumeFile.name.replace(/\s+/g, '_')}`;
    console.log('Attempting upload to bucket: cvs, file:', fileName);

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('cvs')
      .upload(fileName, resumeFile);

    if (uploadError) {
      console.error('Supabase Storage Error:', uploadError);
      throw new Error(`Storage Error: ${uploadError.message}`);
    }

    const { data: { publicUrl } } = supabase.storage
      .from('cvs')
      .getPublicUrl(fileName);

    console.log('File uploaded successfully. URL:', publicUrl);

    // 2. Save Application to Database
    console.log('Saving application to DB for:', email);
    const { error: dbError } = await supabase
      .from('job_applications')
      .insert([
        {
          full_name: fullName,
          email,
          phone,
          position,
          category,
          experience,
          message,
          resume_url: publicUrl,
          status: 'new'
        }
      ]);

    if (dbError) {
      console.error('Supabase DB Error:', dbError);
      throw new Error(`Database Error: ${dbError.message}`);
    }

    // 3. Send Emails
    try {
      // To Company
      await transporter.sendMail({
        from: `"SoftCodec Careers" <${process.env.GMAIL_USER}>`,
        to: process.env.COMPANY_EMAIL,
        ...jobApplicationNotificationEmail(fullName, email, position, experience, publicUrl, message),
      });

      // To Applicant
      await transporter.sendMail({
        from: `"SoftCodec Careers" <${process.env.GMAIL_USER}>`,
        to: email,
        ...applicantConfirmationEmail(fullName, position),
      });
    } catch (mailError) {
      console.error('Mail Error:', mailError);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('CRITICAL APPLICATION ERROR:', error);
    return NextResponse.json({ 
      error: error.message || 'Unknown Server Error',
      details: error.stack
    }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { transporter, internshipCertificateEmail } from '@/lib/email';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const id = formData.get('id') as string;
    const file = formData.get('certificate') as File;

    if (!id || !file) {
      return NextResponse.json({ error: 'Missing intern ID or certificate file' }, { status: 400 });
    }

    // 1. Fetch Applicant Info
    const { data: applicant, error: fetchError } = await supabaseAdmin
      .from('job_applications')
      .select('*')
      .eq('id', id)
      .single();

    if (fetchError) throw fetchError;

    // 2. Upload Certificate File to Supabase Storage Bucket 'certificates'
    const fileExt = file.name.split('.').pop();
    const fileName = `certificate_${id}_${Date.now()}.${fileExt}`;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const { data: uploadData, error: uploadError } = await supabaseAdmin.storage
      .from('certificates')
      .upload(fileName, buffer, {
        contentType: file.type,
        upsert: true
      });

    if (uploadError) {
      console.error('Certificate Storage Upload Error:', uploadError);
      throw uploadError;
    }

    // 3. Get Public Download URL
    const { data: { publicUrl } } = supabaseAdmin.storage
      .from('certificates')
      .getPublicUrl(fileName);

    // 4. Update Database Record with Certificate URL and Status = 'completed'
    const { data: updatedApp, error: updateError } = await supabaseAdmin
      .from('job_applications')
      .update({
        certificate_url: publicUrl,
        status: 'completed'
      })
      .eq('id', id)
      .select();

    if (updateError) throw updateError;

    // 5. Send Certificate Notification Email with Direct Download Link to Intern
    // Using Supabase Storage ?download= parameter forces browser to download file directly
    const downloadFileName = `${applicant.full_name.replace(/[^a-zA-Z0-9_-]/g, '_')}_Internship_Certificate.${fileExt}`;
    const directDownloadUrl = `${publicUrl}?download=${encodeURIComponent(downloadFileName)}`;

    const internField = applicant.field || applicant.position || 'Software Development';
    try {
      await transporter.sendMail({
        from: `"SoftCodec Certificates" <${process.env.GMAIL_USER}>`,
        to: applicant.email,
        ...internshipCertificateEmail(applicant.full_name, internField, directDownloadUrl),
      });
      console.log(`Certificate email sent to ${applicant.email} with direct download link: ${directDownloadUrl}`);
    } catch (mailError) {
      console.error('Certificate Mail Error:', mailError);
    }

    return NextResponse.json({
      success: true,
      certificate_url: publicUrl,
      applicant: updatedApp[0]
    });
  } catch (error: any) {
    console.error('Upload Certificate Route Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

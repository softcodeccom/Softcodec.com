import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { transporter, internshipStartedEmail, internshipCompletedEmail } from '@/lib/email';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// GET: Fetch all internships & Auto-check 2-month completions
export async function GET() {
  try {
    const { data: rawApps, error } = await supabaseAdmin
      .from('job_applications')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    const apps = rawApps || [];
    const now = new Date();
    const updatedApps = [];

    // Automatically check for 2-month internship completions
    for (let app of apps) {
      const isIntern = app.is_internship || app.position?.toLowerCase().includes('intern') || app.field;

      if (isIntern && app.status === 'active' && app.end_date) {
        const endDate = new Date(app.end_date);
        if (now >= endDate) {
          // Internship completed! Auto update status and send completion email
          console.log(`Auto-completing internship for ${app.full_name} (${app.id})`);
          
          const { data: updated, error: updateError } = await supabaseAdmin
            .from('job_applications')
            .update({ status: 'completed' })
            .eq('id', app.id)
            .select();

          if (!updateError && updated && updated.length > 0) {
            app = updated[0];

            // Send Automatic Completion Email
            try {
              await transporter.sendMail({
                from: `"SoftCodec Internships" <${process.env.GMAIL_USER}>`,
                to: app.email,
                ...internshipCompletedEmail(app.full_name, app.field || app.position),
              });
              console.log(`Completion email automatically sent to ${app.email}`);
            } catch (mailErr) {
              console.error('Completion email error:', mailErr);
            }
          }
        }
      }

      if (isIntern || app.is_internship) {
        updatedApps.push(app);
      }
    }

    return NextResponse.json(updatedApps, {
      headers: { 'Cache-Control': 'no-store, max-age=0' }
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST: Direct Intern Creation / Conversion
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { full_name, email, phone, field, position, experience, message } = body;

    const { data, error } = await supabaseAdmin
      .from('job_applications')
      .insert([{
        full_name,
        email,
        phone: phone || '',
        position: position || `Internship - ${field}`,
        field: field || 'Software Engineering',
        experience: experience || 'Fresh',
        message: message || '',
        is_internship: true,
        status: 'pending'
      }])
      .select();

    if (error) throw error;

    return NextResponse.json(data[0]);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PATCH: Start Internship or Update Status
export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, action, field, start_date, end_date } = body;

    if (!id) throw new Error('Applicant ID is required');

    // 1. Fetch current details
    const { data: applicant, error: fetchError } = await supabaseAdmin
      .from('job_applications')
      .select('*')
      .eq('id', id)
      .single();

    if (fetchError) throw fetchError;

    if (action === 'start') {
      const selectedField = field || applicant.field || 'UI/UX & Software Development';
      
      // Calculate 2 months start and end dates
      const sDate = start_date ? new Date(start_date) : new Date();
      const eDate = end_date ? new Date(end_date) : new Date(sDate.getTime() + 60 * 24 * 60 * 60 * 1000); // 60 days = 2 months

      const sDateStr = sDate.toISOString().split('T')[0];
      const eDateStr = eDate.toISOString().split('T')[0];

      // Update database
      const { data, error } = await supabaseAdmin
        .from('job_applications')
        .update({
          status: 'active',
          is_internship: true,
          field: selectedField,
          start_date: sDate.toISOString(),
          end_date: eDate.toISOString()
        })
        .eq('id', id)
        .select();

      if (error) throw error;

      // Send Start Email automatically
      try {
        await transporter.sendMail({
          from: `"SoftCodec Internships" <${process.env.GMAIL_USER}>`,
          to: applicant.email,
          ...internshipStartedEmail(applicant.full_name, selectedField, sDateStr, eDateStr),
        });
        console.log(`Internship start email sent to ${applicant.email} for field: ${selectedField}`);
      } catch (mailError) {
        console.error('Start Email Error:', mailError);
      }

      return NextResponse.json(data[0]);
    } else if (action === 'complete') {
      // Manually mark completed
      const { data, error } = await supabaseAdmin
        .from('job_applications')
        .update({ status: 'completed' })
        .eq('id', id)
        .select();

      if (error) throw error;

      // Send Completion Email
      try {
        await transporter.sendMail({
          from: `"SoftCodec Internships" <${process.env.GMAIL_USER}>`,
          to: applicant.email,
          ...internshipCompletedEmail(applicant.full_name, applicant.field || applicant.position),
        });
      } catch (mailError) {
        console.error('Completion Email Error:', mailError);
      }

      return NextResponse.json(data[0]);
    } else {
      // General status change (e.g., rejected, pending)
      const { status } = body;
      const { data, error } = await supabaseAdmin
        .from('job_applications')
        .update({ status })
        .eq('id', id)
        .select();

      if (error) throw error;
      return NextResponse.json(data[0]);
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE: Delete Internship Record
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) throw new Error('ID is required');

    const { error } = await supabaseAdmin
      .from('job_applications')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

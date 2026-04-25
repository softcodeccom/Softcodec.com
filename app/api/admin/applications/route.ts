import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { transporter, jobStatusUpdateEmail } from '@/lib/email';

// Super Admin client using Service Role Key
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  try {
    console.log('Admin API (Super): Fetching all applications...');
    const { data, error } = await supabaseAdmin
      .from('job_applications')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Admin API Super Fetch Error:', error);
      throw error;
    }
    
    return NextResponse.json(data, {
      headers: { 'Cache-Control': 'no-store, max-age=0' }
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;
    
    // 1. Get Applicant details first
    const { data: applicant, error: fetchError } = await supabaseAdmin
      .from('job_applications')
      .select('full_name, email, position')
      .eq('id', id)
      .single();

    if (fetchError) throw fetchError;

    // 2. Update Status
    const { data, error } = await supabaseAdmin
      .from('job_applications')
      .update({ status })
      .eq('id', id)
      .select();

    if (error) throw error;

    // 3. Send Notification Email
    try {
      await transporter.sendMail({
        from: `"SoftCodec Careers" <${process.env.GMAIL_USER}>`,
        to: applicant.email,
        ...jobStatusUpdateEmail(applicant.full_name, applicant.position, status),
      });
      console.log(`Status update email sent to ${applicant.email} for status: ${status}`);
    } catch (mailError) {
      console.error('Status Email Error:', mailError);
    }

    return NextResponse.json(data[0]);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

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

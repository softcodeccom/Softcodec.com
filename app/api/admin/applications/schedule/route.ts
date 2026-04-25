import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { transporter } from '@/lib/email';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, meeting_at, meeting_link } = body;

    // 1. Fetch Candidate Details
    const { data: applicant, error: fetchError } = await supabaseAdmin
      .from('job_applications')
      .select('full_name, email, position')
      .eq('id', id)
      .single();

    if (fetchError) throw fetchError;

    // 2. Update Database
    const { error: dbError } = await supabaseAdmin
      .from('job_applications')
      .update({ 
        meeting_at, 
        meeting_link 
      })
      .eq('id', id);

    if (dbError) throw dbError;

    // 3. Send Meeting Email
    try {
      await transporter.sendMail({
        from: `"SoftCodec Recruitment" <${process.env.GMAIL_USER}>`,
        to: applicant.email,
        subject: `📅 Interview Invitation: ${applicant.position} – SoftCodec`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #7c3aed;">Interview Invitation</h2>
            <p>Hi <strong>${applicant.full_name}</strong>,</p>
            <p>We are excited to invite you for an interview for the <strong>${applicant.position}</strong> position at SoftCodec.</p>
            <div style="background: #f9f9f9; padding: 24px; border-radius: 16px; margin: 24px 0; border: 1px solid #e2e8f0;">
              <p style="margin: 0; color: #1e293b; font-size: 14px;"><strong>📅 Date & Time:</strong></p>
              <p style="margin: 4px 0 16px; color: #7c3aed; font-size: 16px; font-weight: 800;">${new Date(meeting_at).toLocaleString()}</p>
              
              <p style="margin: 0; color: #1e293b; font-size: 14px;"><strong>🔗 Meeting Link:</strong></p>
              ${meeting_link ? `
                <p style="margin: 4px 0 0; font-size: 15px;"><a href="${meeting_link}" style="color: #7c3aed; font-weight: 700; text-decoration: none;">Join Interview Room →</a></p>
              ` : `
                <p style="margin: 4px 0 0; color: #64748b; font-style: italic; font-size: 14px;">The meeting link will be shared via email 15 minutes before the interview.</p>
              `}
            </div>

            <div style="margin-bottom: 32px;">
              <h3 style="color: #1e293b; font-size: 16px; margin-bottom: 16px; border-bottom: 2px solid #7c3aed; display: inline-block;">📋 Interview Preparation Checklist</h3>
              <ul style="padding: 0; margin: 0; list-style: none;">
                <li style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; display: flex; align-items: center;">
                  <span style="margin-right: 10px;">📄</span> <strong>Updated CV/Resume:</strong> Keep a digital and physical copy ready.
                </li>
                <li style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; display: flex; align-items: center;">
                  <span style="margin-right: 10px;">🎓</span> <strong>Original Documents:</strong> Have your educational certificates and ID for verification.
                </li>
                <li style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; display: flex; align-items: center;">
                  <span style="margin-right: 10px;">💻</span> <strong>Technical Setup:</strong> Ensure a stable internet connection and working camera/mic.
                </li>
                <li style="padding: 10px 0; display: flex; align-items: center;">
                  <span style="margin-right: 10px;">🤫</span> <strong>Quiet Environment:</strong> Please join from a professional and quiet space.
                </li>
              </ul>
            </div>
            <p>Please make sure to join on time. We look forward to speaking with you!</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
            <p style="font-size: 12px; color: #666;">This is an automated message from SoftCodec Talent Acquisition Team.</p>
          </div>
        `
      });
    } catch (mailError) {
      console.error('Meeting Email Error:', mailError);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

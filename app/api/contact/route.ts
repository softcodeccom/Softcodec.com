import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { transporter, contactConfirmationEmail, contactNotificationEmail } from '../../../lib/email';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, service, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Save to Supabase
    const { error: dbError } = await supabase.from('leads').insert({
      name, email, company, service, budget, message, status: 'new'
    });

    if (dbError) throw dbError;

    // 2. Send confirmation & notification emails gracefully
    try {
      const confirmEmail = contactConfirmationEmail(name, service || 'General Inquiry');
      await transporter.sendMail({
        from: `"SoftCodec Agency" <${process.env.GMAIL_USER}>`,
        replyTo: 'info@softcodec.co',
        to: email,
        subject: confirmEmail.subject,
        html: confirmEmail.html,
      });

      const notifEmail = contactNotificationEmail(name, email, service || 'N/A', message, company, budget);
      await transporter.sendMail({
        from: `"SoftCodec Leads" <${process.env.GMAIL_USER}>`,
        replyTo: email,
        to: process.env.COMPANY_EMAIL || 'business@softcodec.co',
        subject: notifEmail.subject,
        html: notifEmail.html,
      });
    } catch (mailError) {
      console.error('Contact Email Warning (Lead safely saved to DB):', mailError);
    }

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: error.message || 'Something went wrong' }, { status: 500 });
  }
}

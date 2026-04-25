import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { transporter, newsletterConfirmationEmail, newsletterNotificationEmail } from '../../../lib/email';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }

    // 1. Save to Supabase leads table
    const { error: dbError } = await supabase.from('leads').insert({
      name: 'Newsletter Subscriber',
      email,
      service: 'Newsletter',
      message: 'Subscribed via footer newsletter form.',
      status: 'new'
    });

    if (dbError) throw dbError;

    // 2. Send welcome email to subscriber
    const confirmEmail = newsletterConfirmationEmail(email);
    await transporter.sendMail({
      from: `"SoftCodec Newsletter" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: confirmEmail.subject,
      html: confirmEmail.html,
    });

    // 3. Send notification to company
    const notifEmail = newsletterNotificationEmail(email);
    await transporter.sendMail({
      from: `"SoftCodec Leads" <${process.env.GMAIL_USER}>`,
      to: process.env.COMPANY_EMAIL,
      subject: notifEmail.subject,
      html: notifEmail.html,
    });

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error('Newsletter API Error:', error);
    return NextResponse.json({ error: error.message || 'Something went wrong' }, { status: 500 });
  }
}

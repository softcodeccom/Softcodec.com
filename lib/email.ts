import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const LOGO_URL = 'https://ajvnbuzpxqbrvngnjsak.supabase.co/storage/v1/object/public/assets/softcodec-logo.png';
const SITE = 'https://softcodec.co';

const logo = `
  <a href="${SITE}" style="text-decoration:none; display:block;">
    <img src="${LOGO_URL}" alt="SoftCodec" width="160" height="40" style="display:block;margin:0 auto;filter:brightness(0) invert(1);" />
  </a>
`;

const footerLinks = `
  <a href="${SITE}/portfolio" style="color:#ffffff; text-decoration:none; font-size:13px; font-weight:600; margin:0 12px;">Portfolio</a>
  <a href="${SITE}/services" style="color:#ffffff; text-decoration:none; font-size:13px; font-weight:600; margin:0 12px;">Services</a>
  <a href="${SITE}/testimonials" style="color:#ffffff; text-decoration:none; font-size:13px; font-weight:600; margin:0 12px;">Testimonials</a>
  <a href="${SITE}/contact" style="color:#ffffff; text-decoration:none; font-size:13px; font-weight:600; margin:0 12px;">Contact</a>
`;

// ──────────────────────────────────────────────
// 1. CONTACT CONFIRMATION → to client
// ──────────────────────────────────────────────
export const contactConfirmationEmail = (name: string, service: string) => ({
  subject: `✅ We Received Your Message – SoftCodec`,
  html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Message Received</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
  * { box-sizing:border-box; margin:0; padding:0; }
  body { background:#f1f5f9; font-family:'Inter',Arial,sans-serif; }
</style>
</head>
<body style="background:#f1f5f9; padding:32px 16px;">
  <div style="max-width:580px; margin:0 auto;">
    <div style="background:#fff; border-radius:24px; overflow:hidden; box-shadow:0 4px 32px rgba(0,0,0,0.08); border:1px solid #e2e8f0;">
      <div style="background:linear-gradient(135deg,#7c3aed 0%,#4f46e5 60%,#06b6d4 100%); padding:40px 40px 36px; text-align:center; position:relative; overflow:hidden;">
        <div style="position:absolute;top:-50px;right:-50px;width:180px;height:180px;background:rgba(255,255,255,0.06);border-radius:50%;"></div>
        <div style="position:absolute;bottom:-30px;left:-30px;width:120px;height:120px;background:rgba(255,255,255,0.04);border-radius:50%;"></div>
        ${logo}
        <div style="margin-top:28px;">
          <div style="display:inline-block;width:56px;height:56px;background:rgba(255,255,255,0.15);border-radius:50%;line-height:56px;font-size:28px;margin-bottom:14px;">✅</div>
          <h1 style="color:#fff; font-size:24px; font-weight:800; letter-spacing:-0.5px; margin-bottom:8px;">Message Received!</h1>
          <p style="color:rgba(255,255,255,0.82); font-size:15px;">We'll get back to you within 24 hours</p>
        </div>
      </div>
      <div style="padding:40px;">
        <p style="color:#1e293b; font-size:18px; font-weight:700; margin-bottom:8px;">Hi ${name} 👋</p>
        <p style="color:#64748b; font-size:15px; line-height:1.8; margin-bottom:28px;">
          Thank you for reaching out to <strong style="color:#7c3aed;">SoftCodec</strong>. We've received your inquiry and our team is already on it. Expect a reply very soon!
        </p>
        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #7c3aed; border-radius:12px; padding:18px 20px; margin-bottom:32px;">
          <p style="color:#94a3b8; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1.5px; margin-bottom:6px;">Requested Service</p>
          <p style="color:#7c3aed; font-size:17px; font-weight:800;">${service}</p>
        </div>
        <p style="color:#1e293b; font-size:12px; font-weight:800; text-transform:uppercase; letter-spacing:1px; margin-bottom:16px;">What happens next</p>
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
          <tr>
            <td style="padding:12px 0; border-bottom:1px solid #f1f5f9; vertical-align:top; width:46px;">
              <div style="width:40px;height:40px;background:#f5f3ff;border-radius:10px;text-align:center;line-height:40px;font-size:18px;">🔍</div>
            </td>
            <td style="padding:12px 0 12px 14px; border-bottom:1px solid #f1f5f9; vertical-align:middle;">
              <p style="color:#1e293b;font-size:14px;font-weight:700;margin-bottom:2px;">Team Review</p>
              <p style="color:#94a3b8;font-size:13px;">Our experts review your requirements carefully.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:12px 0; border-bottom:1px solid #f1f5f9; vertical-align:top; width:46px;">
              <div style="width:40px;height:40px;background:#f5f3ff;border-radius:10px;text-align:center;line-height:40px;font-size:18px;">📞</div>
            </td>
            <td style="padding:12px 0 12px 14px; border-bottom:1px solid #f1f5f9; vertical-align:middle;">
              <p style="color:#1e293b;font-size:14px;font-weight:700;margin-bottom:2px;">24hr Response</p>
              <p style="color:#94a3b8;font-size:13px;">A team member reaches out within 24 hours.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:12px 0; vertical-align:top; width:46px;">
              <div style="width:40px;height:40px;background:#f5f3ff;border-radius:10px;text-align:center;line-height:40px;font-size:18px;">🚀</div>
            </td>
            <td style="padding:12px 0 12px 14px; vertical-align:middle;">
              <p style="color:#1e293b;font-size:14px;font-weight:700;margin-bottom:2px;">Project Kickoff</p>
              <p style="color:#94a3b8;font-size:13px;">We begin turning your vision into reality.</p>
            </td>
          </tr>
        </table>
        <div style="text-align:center; margin-bottom:32px;">
          <a href="${SITE}/portfolio" style="display:inline-block;background:linear-gradient(135deg,#7c3aed,#06b6d4);color:#fff;text-decoration:none;padding:16px 44px;border-radius:100px;font-size:15px;font-weight:700;box-shadow:0 6px 20px rgba(124,58,237,0.3);">View Our Portfolio →</a>
        </div>
        <p style="color:#94a3b8; font-size:13px; text-align:center; line-height:1.7;">
          Questions? <a href="mailto:softcodec.com@gmail.com" style="color:#7c3aed;text-decoration:none;font-weight:600;">softcodec.co</a>
        </p>
      </div>
      <div style="padding:28px 40px; background:#1e293b; text-align:center;">
        <div style="margin-bottom:18px;">${footerLinks}</div>
        <p style="color:rgba(255,255,255,0.4); font-size:12px; margin:0;">© ${new Date().getFullYear()} SoftCodec · Pakistan's #1 Tech Agency</p>
      </div>
    </div>
  </div>
</body>
</html>`
});

// ──────────────────────────────────────────────
// 2. CONTACT NOTIFICATION → to company
// ──────────────────────────────────────────────
export const contactNotificationEmail = (name: string, email: string, service: string, message: string, company?: string, budget?: string) => ({
  subject: `🔔 New Lead: ${name} – ${service}`,
  html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>New Lead</title>
<style>
  * { box-sizing:border-box; margin:0; padding:0; }
  body { background:#f1f5f9; font-family:'Inter',Arial,sans-serif; }
</style>
</head>
<body style="background:#f1f5f9; padding:32px 16px;">
  <div style="max-width:580px; margin:0 auto;">
    <div style="background:#fff; border-radius:24px; overflow:hidden; box-shadow:0 4px 24px rgba(0,0,0,0.07); border:1px solid #e2e8f0;">
      <div style="background:#1e293b; padding:36px 40px; text-align:center; position:relative; overflow:hidden;">
        <div style="position:absolute;top:0;right:0;width:140px;height:140px;background:rgba(124,58,237,0.12);border-radius:50%;transform:translate(40%,-40%);"></div>
        ${logo}
        <div style="margin-top:20px;">
          <div style="display:inline-block;background:rgba(239,68,68,0.12);border:1px solid rgba(239,68,68,0.25);border-radius:100px;padding:6px 16px;margin-bottom:12px;">
            <span style="color:#f87171;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">🔔 New Lead Alert</span>
          </div>
          <h1 style="color:#fff; font-size:22px; font-weight:800; margin-bottom:4px;">${name}</h1>
          <p style="color:#94a3b8; font-size:14px;">Interested in: <span style="color:#a78bfa; font-weight:600;">${service}</span></p>
        </div>
      </div>
      <div style="padding:36px 40px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
          ${[
            ['👤 Name', name],
            ['📧 Email', email],
            ['🏢 Company', company || '—'],
            ['🛠 Service', service],
            ['💰 Budget', budget || '—'],
          ].map(([label, value]) => `
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;width:140px;vertical-align:top;">
              <span style="color:#94a3b8;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">${label}</span>
            </td>
            <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;vertical-align:top;">
              <span style="color:#1e293b;font-size:14px;font-weight:600;">${value}</span>
            </td>
          </tr>`).join('')}
        </table>
        <p style="color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">Message</p>
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-left:4px solid #7c3aed;border-radius:12px;padding:20px;margin-bottom:28px;">
          <p style="color:#475569;font-size:15px;line-height:1.8;font-style:italic;">"${message}"</p>
        </div>
        <div style="text-align:center;">
          <a href="${SITE}/admin/contacts" style="display:inline-block;background:#1e293b;color:#fff;text-decoration:none;padding:14px 36px;border-radius:100px;font-size:14px;font-weight:700;border:2px solid #7c3aed;">Open Admin Panel →</a>
        </div>
      </div>
      <div style="padding:24px 40px; background:#1e293b; text-align:center;">
        <p style="color:rgba(255,255,255,0.4); font-size:12px; margin:0;">SoftCodec Lead Notification · ${new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' })}</p>
      </div>
    </div>
  </div>
</body>
</html>`
});

// ──────────────────────────────────────────────
// 3. JOB APPLICATION → to company
// ──────────────────────────────────────────────
export const jobApplicationNotificationEmail = (name: string, email: string, position: string, experience: string, resumeUrl: string, message?: string) => ({
  subject: `💼 New Job Application: ${name} – ${position}`,
  html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing:border-box; margin:0; padding:0; }
  body { background:#f1f5f9; font-family:'Inter',Arial,sans-serif; }
</style>
</head>
<body style="background:#f1f5f9; padding:32px 16px;">
  <div style="max-width:580px; margin:0 auto;">
    <div style="background:#fff; border-radius:24px; overflow:hidden; box-shadow:0 4px 24px rgba(0,0,0,0.07); border:1px solid #e2e8f0;">
      <div style="background:#4f46e5; padding:36px 40px; text-align:center; position:relative; overflow:hidden;">
        <div style="position:absolute;top:0;right:0;width:140px;height:140px;background:rgba(255,255,255,0.1);border-radius:50%;transform:translate(40%,-40%);"></div>
        ${logo}
        <div style="margin-top:20px;">
          <div style="display:inline-block;background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.3);border-radius:100px;padding:6px 16px;margin-bottom:12px;">
            <span style="color:#fff;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">💼 New Applicant</span>
          </div>
          <h1 style="color:#fff; font-size:22px; font-weight:800; margin-bottom:4px;">${name}</h1>
          <p style="color:rgba(255,255,255,0.8); font-size:14px;">Applying for: <strong style="color:#fff;">${position}</strong></p>
        </div>
      </div>
      <div style="padding:36px 40px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
          ${[
            ['👤 Full Name', name],
            ['📧 Email', email],
            ['🎯 Position', position],
            ['⏳ Experience', experience],
          ].map(([label, value]) => `
          <tr>
            <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;width:140px;vertical-align:top;">
              <span style="color:#94a3b8;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">${label}</span>
            </td>
            <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;vertical-align:top;">
              <span style="color:#1e293b;font-size:14px;font-weight:600;">${value}</span>
            </td>
          </tr>`).join('')}
        </table>
        
        <div style="text-align:center; margin-bottom:28px;">
          <a href="${resumeUrl}" style="display:inline-block;background:#4f46e5;color:#fff;text-decoration:none;padding:14px 44px;border-radius:12px;font-size:15px;font-weight:700;">Download CV / Resume 📄</a>
        </div>

        ${message ? `
          <p style="color:#64748b;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">Cover Letter / Message</p>
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-left:4px solid #4f46e5;border-radius:12px;padding:20px;margin-bottom:28px;">
            <p style="color:#475569;font-size:15px;line-height:1.8;font-style:italic;">"${message}"</p>
          </div>
        ` : ''}

        <div style="text-align:center;">
          <a href="${SITE}/admin/careers" style="display:inline-block;background:#1e293b;color:#fff;text-decoration:none;padding:14px 36px;border-radius:100px;font-size:14px;font-weight:700;border:2px solid #4f46e5;">View in Admin Panel →</a>
        </div>
      </div>
      <div style="padding:24px 40px; background:#1e293b; text-align:center;">
        <p style="color:rgba(255,255,255,0.4); font-size:12px; margin:0;">SoftCodec Careers · ${new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' })}</p>
      </div>
    </div>
  </div>
</body>
</html>`
});

// ──────────────────────────────────────────────
// 4. APPLICANT CONFIRMATION → to applicant
// ──────────────────────────────────────────────
export const applicantConfirmationEmail = (name: string, position: string) => ({
  subject: `🎯 Application Received: ${position} – SoftCodec`,
  html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing:border-box; margin:0; padding:0; }
  body { background:#f1f5f9; font-family:'Inter',Arial,sans-serif; }
</style>
</head>
<body style="background:#f1f5f9; padding:32px 16px;">
  <div style="max-width:580px; margin:0 auto;">
    <div style="background:#fff; border-radius:24px; overflow:hidden; box-shadow:0 4px 32px rgba(0,0,0,0.08); border:1px solid #e2e8f0;">
      <div style="background:linear-gradient(135deg,#4f46e5 0%,#7c3aed 100%); padding:40px 40px 36px; text-align:center; position:relative; overflow:hidden;">
        ${logo}
        <div style="margin-top:28px;">
          <div style="display:inline-block;width:56px;height:56px;background:rgba(255,255,255,0.15);border-radius:50%;line-height:56px;font-size:28px;margin-bottom:14px;">🎯</div>
          <h1 style="color:#fff; font-size:24px; font-weight:800; margin-bottom:8px;">Application Received</h1>
          <p style="color:rgba(255,255,255,0.85); font-size:15px;">Position: ${position}</p>
        </div>
      </div>
      <div style="padding:40px;">
        <p style="color:#1e293b; font-size:18px; font-weight:700; margin-bottom:8px;">Hi ${name},</p>
        <p style="color:#64748b; font-size:15px; line-height:1.8; margin-bottom:24px;">
          Thank you for applying to join the **SoftCodec** team! We've received your CV and details for the **${position}** role.
        </p>
        <p style="color:#64748b; font-size:15px; line-height:1.8; margin-bottom:32px;">
          Our recruitment team will review your profile and if there's a match, we'll reach out to schedule an interview.
        </p>
        <div style="text-align:center; padding:24px; background:#f8fafc; border-radius:16px;">
          <p style="color:#1e293b; font-size:14px; font-weight:700; margin-bottom:4px;">Next Steps</p>
          <p style="color:#94a3b8; font-size:13px;">Wait for 3-5 business days for initial screening.</p>
        </div>
      </div>
      <div style="padding:28px 40px; background:#1e293b; text-align:center;">
        <div style="margin-bottom:18px;">${footerLinks}</div>
        <p style="color:rgba(255,255,255,0.4); font-size:12px; margin:0;">© ${new Date().getFullYear()} SoftCodec · Pakistan's #1 Tech Agency</p>
      </div>
    </div>
  </div>
</body>
</html>`
});

// ──────────────────────────────────────────────
// 5. NEWSLETTER CONFIRMATION → to subscriber
// ──────────────────────────────────────────────
export const newsletterConfirmationEmail = (email: string) => ({
  subject: `🚀 You're In the Arsenal – SoftCodec`,
  html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing:border-box; margin:0; padding:0; }
  body { background:#f1f5f9; font-family:'Inter',Arial,sans-serif; }
</style>
</head>
<body style="background:#f1f5f9; padding:32px 16px;">
  <div style="max-width:580px; margin:0 auto;">
    <div style="background:#fff; border-radius:24px; overflow:hidden; box-shadow:0 4px 32px rgba(0,0,0,0.08); border:1px solid #e2e8f0;">
      <div style="background:linear-gradient(135deg,#312e81 0%,#7c3aed 50%,#0e7490 100%); padding:44px 40px; text-align:center; position:relative; overflow:hidden;">
        ${logo}
        <div style="margin-top:28px;">
          <div style="font-size:48px;margin-bottom:14px;">🚀</div>
          <h1 style="color:#fff;font-size:26px;font-weight:900;margin-bottom:8px;">You're In the Arsenal!</h1>
          <p style="color:rgba(255,255,255,0.78);font-size:15px;">SoftCodec's exclusive tech newsletter</p>
        </div>
      </div>
      <div style="padding:40px;">
        <p style="color:#475569;font-size:15px;line-height:1.8;margin-bottom:24px;text-align:center;">
          Welcome to <strong style="color:#7c3aed;">The Arsenal</strong> — where we share cutting-edge tech insights, project case studies, and exclusive offers.
        </p>
        <div style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:12px;padding:14px 20px;text-align:center;margin-bottom:32px;">
          <p style="color:#6b7280;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">Subscribed with</p>
          <p style="color:#7c3aed;font-size:16px;font-weight:800;">${email}</p>
        </div>
        <div style="text-align:center;">
          <a href="${SITE}/portfolio" style="display:inline-block;background:linear-gradient(135deg,#7c3aed,#06b6d4);color:#fff;text-decoration:none;padding:16px 44px;border-radius:100px;font-size:15px;font-weight:700;box-shadow:0 6px 20px rgba(124,58,237,0.25);">Explore Our Work →</a>
        </div>
      </div>
      <div style="padding:28px 40px;background:#1e293b;text-align:center;">
        <div style="margin-bottom:12px;">${footerLinks}</div>
        <p style="color:rgba(255,255,255,0.4);font-size:12px;">© ${new Date().getFullYear()} SoftCodec · Pakistan's #1 Tech Agency</p>
      </div>
    </div>
  </div>
</body>
</html>`
});

// ──────────────────────────────────────────────
// 6. NEWSLETTER NOTIFICATION → to company
// ──────────────────────────────────────────────
export const newsletterNotificationEmail = (email: string) => ({
  subject: `📬 New Subscriber: ${email}`,
  html: `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8">
<style>*{box-sizing:border-box;margin:0;padding:0;}body{background:#f1f5f9;font-family:Arial,sans-serif;}</style>
</head>
<body style="background:#f1f5f9;padding:32px 16px;">
  <div style="max-width:500px;margin:0 auto;">
    <div style="background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.07);border:1px solid #e2e8f0;">
      <div style="background:linear-gradient(135deg,#7c3aed,#06b6d4);padding:32px 36px;text-align:center;">
        ${logo}
        <div style="margin-top:18px;font-size:30px;margin-bottom:10px;">📬</div>
        <h2 style="color:#fff;font-size:19px;font-weight:800;margin-bottom:4px;">New Newsletter Subscriber</h2>
        <p style="color:rgba(255,255,255,0.75);font-size:14px;">Someone just joined the Arsenal!</p>
      </div>
      <div style="padding:32px 36px;">
        <div style="background:#f5f3ff;border:1px solid #ddd6fe;border-radius:12px;padding:20px;text-align:center;margin-bottom:24px;">
          <p style="color:#6b7280;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">Subscriber Email</p>
          <p style="color:#7c3aed;font-size:18px;font-weight:800;">${email}</p>
        </div>
        <div style="text-align:center;">
          <a href="${SITE}/admin/contacts" style="display:inline-block;background:#1e293b;color:#fff;text-decoration:none;padding:12px 28px;border-radius:100px;font-size:13px;font-weight:700;">View in Admin Panel →</a>
        </div>
      </div>
      <div style="padding:24px 36px; background:#1e293b; text-align:center;">
        <p style="color:rgba(255,255,255,0.4); font-size:12px; margin:0;">SoftCodec · ${new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' })}</p>
      </div>
    </div>
  </div>
</body>
</html>`
});
// ──────────────────────────────────────────────
// 7. STATUS UPDATE → to applicant
// ──────────────────────────────────────────────
export const jobStatusUpdateEmail = (name: string, position: string, status: string) => {
  let subject = '';
  let title = '';
  let icon = '';
  let message = '';
  let color = '#7c3aed';

  if (status === 'shortlisted') {
    subject = `⚡ Good News: You've Been Shortlisted! – SoftCodec`;
    title = 'You\'re Shortlisted!';
    icon = '⚡';
    color = '#10b981';
    message = `We were impressed with your profile for the **${position}** role. You've been moved to the next stage of our recruitment process. Expect a call or email from our HR team soon to schedule your first interview.`;
  } else if (status === 'rejected') {
    subject = `Update on your application for ${position} – SoftCodec`;
    title = 'Application Update';
    icon = '📩';
    color = '#ef4444';
    message = `Thank you for your interest in the **${position}** role at SoftCodec. After careful review, we have decided not to move forward with your application at this time. We appreciate the time you took to apply and wish you the best in your career.`;
  } else {
    subject = `Application Update: ${position} – SoftCodec`;
    title = 'Application Update';
    icon = '🎯';
    color = '#7c3aed';
    message = `Your application for the **${position}** role is currently being reviewed by our department leads. We will keep you updated on any further progress.`;
  }

  return {
    subject,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing:border-box; margin:0; padding:0; }
  body { background:#f1f5f9; font-family:'Inter',Arial,sans-serif; }
</style>
</head>
<body style="background:#f1f5f9; padding:32px 16px;">
  <div style="max-width:580px; margin:0 auto;">
    <div style="background:#fff; border-radius:24px; overflow:hidden; box-shadow:0 4px 32px rgba(0,0,0,0.08); border:1px solid #e2e8f0;">
      <div style="background: ${color}; padding:40px 40px 36px; text-align:center; position:relative; overflow:hidden;">
        ${logo}
        <div style="margin-top:28px;">
          <div style="display:inline-block;width:56px;height:56px;background:rgba(255,255,255,0.15);border-radius:50%;line-height:56px;font-size:28px;margin-bottom:14px;">${icon}</div>
          <h1 style="color:#fff; font-size:24px; font-weight:800; margin-bottom:8px;">${title}</h1>
          <p style="color:rgba(255,255,255,0.85); font-size:15px;">Position: ${position}</p>
        </div>
      </div>
      <div style="padding:40px;">
        <p style="color:#1e293b; font-size:18px; font-weight:700; margin-bottom:16px;">Hi ${name},</p>
        <p style="color:#64748b; font-size:15px; line-height:1.8; margin-bottom:24px;">
          ${message}
        </p>
        <div style="text-align:center; padding:24px; background:#f8fafc; border-radius:16px; margin-bottom:32px;">
          <p style="color:#1e293b; font-size:14px; font-weight:700; margin-bottom:4px;">Current Status</p>
          <div style="display:inline-block; padding:6px 16px; background: ${color}15; color: ${color}; border-radius:100px; font-weight:900; font-size:12px; text-transform:uppercase; letter-spacing:1px;">
            ${status}
          </div>
        </div>
        <p style="color:#94a3b8; font-size:13px; text-align:center; line-height:1.7;">
          If you have any questions, feel free to reply to this email or visit <a href="${SITE}" style="color:${color};text-decoration:none;font-weight:600;">softcodec.co</a>
        </p>
      </div>
      <div style="padding:28px 40px; background:#1e293b; text-align:center;">
        <div style="margin-bottom:18px;">${footerLinks}</div>
        <p style="color:rgba(255,255,255,0.4); font-size:12px; margin:0;">© ${new Date().getFullYear()} SoftCodec · Pakistan's #1 Tech Agency</p>
      </div>
    </div>
  </div>
</body>
</html>`
  };
};

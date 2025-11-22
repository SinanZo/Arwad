// Note: This template uses a placeholder email service.
// In production, integrate with your SMTP service (SendGrid, AWS SES, etc.)
// For now, emails are logged to console and owner is notified via Manus notification system.

import { notifyOwner } from './_core/notification';

interface QuoteEmailData {
  customerName: string;
  customerEmail: string;
  company: string;
  phone: string;
  industry: string;
  items: Array<{
    partNumber: string;
    description: string;
    quantity: number;
  }>;
}

interface ContactEmailData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

/**
 * Send automated confirmation email for quote requests
 */
export async function sendQuoteConfirmationEmail(data: QuoteEmailData): Promise<void> {
  const subject = 'Quote Request Received - ARWAD Trading';
  
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #1e40af 0%, #dc2626 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
    .info-box { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #1e40af; }
    .item { background: white; padding: 15px; margin: 10px 0; border-radius: 6px; }
    .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb; color: #6b7280; font-size: 14px; }
    .button { display: inline-block; background: #1e40af; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
    h1 { margin: 0; font-size: 24px; }
    h2 { color: #1e40af; margin-top: 0; }
    strong { color: #1e40af; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✓ Quote Request Received</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">Thank you for choosing ARWAD Trading</p>
    </div>
    
    <div class="content">
      <p>Dear <strong>${data.customerName}</strong>,</p>
      
      <p>Thank you for your quote request. We have received your inquiry and our team is already reviewing your requirements.</p>
      
      <div class="info-box">
        <h2>Your Request Details</h2>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Industry:</strong> ${data.industry}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.customerEmail}</p>
      </div>
      
      <h2>Requested Items (${data.items.length})</h2>
      ${data.items.map((item, index) => `
        <div class="item">
          <strong>Item ${index + 1}:</strong> ${item.partNumber}<br>
          <strong>Description:</strong> ${item.description}<br>
          <strong>Quantity:</strong> ${item.quantity}
        </div>
      `).join('')}
      
      <div class="info-box" style="border-left-color: #dc2626; background: #fef2f2;">
        <h2 style="color: #dc2626; margin-top: 0;">⏱️ What Happens Next?</h2>
        <ol style="margin: 10px 0; padding-left: 20px;">
          <li>Our technical team will review your requirements within 24 hours</li>
          <li>We'll prepare a detailed quotation with competitive pricing</li>
          <li>You'll receive our quote via email with delivery timelines</li>
          <li>Our team will contact you to discuss any questions</li>
        </ol>
      </div>
      
      <p style="text-align: center;">
        <a href="https://wa.me/971501028312" class="button">Contact Us on WhatsApp</a>
      </p>
      
      <div class="footer">
        <p><strong>ARWAD Trading</strong><br>
        MRO & Supply Chain Solutions</p>
        <p>📍 102, Al Qouz 3, Bur Dubai, UAE<br>
        📞 Mobile: +971-50-1028312 | Tel: +971-4-45780055<br>
        📧 info@arwad.org</p>
        <p style="margin-top: 20px; font-size: 12px;">
          This is an automated confirmation email. Please do not reply to this message.
        </p>
      </div>
    </div>
  </div>
</body>
</html>
  `;

  // TODO: Integrate with your SMTP service (SendGrid, AWS SES, Mailgun, etc.)
  // For now, log the email content
  console.log('[Email] Quote Confirmation Email');
  console.log('To:', data.customerEmail);
  console.log('Subject:', subject);
  console.log('HTML Content Length:', htmlContent.length, 'characters');
  
  // In production, replace with:
  // await yourEmailService.send({ to: data.customerEmail, subject, html: htmlContent });
}

/**
 * Send automated confirmation email for contact form submissions
 */
export async function sendContactConfirmationEmail(data: ContactEmailData): Promise<void> {
  const subject = 'Message Received - ARWAD Trading';
  
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #1e40af 0%, #dc2626 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
    .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
    .info-box { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #1e40af; }
    .message-box { background: #f0f9ff; padding: 20px; margin: 20px 0; border-radius: 8px; border: 1px solid #bfdbfe; }
    .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb; color: #6b7280; font-size: 14px; }
    .button { display: inline-block; background: #1e40af; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
    h1 { margin: 0; font-size: 24px; }
    h2 { color: #1e40af; margin-top: 0; }
    strong { color: #1e40af; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>✓ Message Received</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">We'll get back to you soon</p>
    </div>
    
    <div class="content">
      <p>Dear <strong>${data.name}</strong>,</p>
      
      <p>Thank you for contacting ARWAD Trading. We have received your message and our team will respond to your inquiry as soon as possible.</p>
      
      <div class="info-box">
        <h2>Your Message Details</h2>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
      </div>
      
      <div class="message-box">
        <h2 style="margin-top: 0;">Your Message:</h2>
        <p style="white-space: pre-wrap;">${data.message}</p>
      </div>
      
      <div class="info-box" style="border-left-color: #dc2626; background: #fef2f2;">
        <h2 style="color: #dc2626; margin-top: 0;">⏱️ Response Time</h2>
        <p>Our team typically responds within <strong>24-48 hours</strong> during business days (Sunday - Thursday, 8:00 AM - 6:00 PM GST).</p>
        <p>For urgent matters, please contact us directly:</p>
        <ul style="margin: 10px 0;">
          <li>📞 Mobile: +971-50-1028312</li>
          <li>📞 Tel: +971-4-45780055</li>
          <li>💬 WhatsApp: +971-50-1028312</li>
        </ul>
      </div>
      
      <p style="text-align: center;">
        <a href="https://wa.me/971501028312" class="button">Contact Us on WhatsApp</a>
      </p>
      
      <div class="footer">
        <p><strong>ARWAD Trading</strong><br>
        MRO & Supply Chain Solutions</p>
        <p>📍 102, Al Qouz 3, Bur Dubai, UAE<br>
        📞 Mobile: +971-50-1028312 | Tel: +971-4-45780055<br>
        📧 info@arwad.org</p>
        <p style="margin-top: 20px; font-size: 12px;">
          This is an automated confirmation email. Please do not reply to this message.
        </p>
      </div>
    </div>
  </div>
</body>
</html>
  `;

  // TODO: Integrate with your SMTP service (SendGrid, AWS SES, Mailgun, etc.)
  // For now, log the email content
  console.log('[Email] Contact Confirmation Email');
  console.log('To:', data.email);
  console.log('Subject:', subject);
  console.log('HTML Content Length:', htmlContent.length, 'characters');
  
  // In production, replace with:
  // await yourEmailService.send({ to: data.email, subject, html: htmlContent });
}

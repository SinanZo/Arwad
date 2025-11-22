# SendGrid Email Integration Setup Guide

This guide explains how to set up SendGrid for automated email confirmations in the ARWAD Trading website.

## Overview

The application sends automated confirmation emails for:
- **Quote Requests** - Sent when customers submit quote order forms
- **Contact Form Submissions** - Sent when customers submit contact messages

## Prerequisites

1. **SendGrid Account** - Sign up at https://sendgrid.com (Free tier available)
2. **Verified Sender Email** - You need to verify a sender email address
3. **API Key** - Generated from SendGrid dashboard

## Step 1: Create SendGrid Account

1. Go to https://sendgrid.com/pricing/
2. Click "Try for Free" (100 emails/day forever free)
3. Sign up with your email
4. Verify your email address
5. Complete the account setup

## Step 2: Verify Sender Identity

SendGrid requires you to verify your sender email address.

### Option A: Single Sender Verification (Recommended for small businesses)

1. Go to SendGrid Dashboard → Settings → Sender Authentication
2. Click "Verify a Single Sender"
3. Fill in the form:
   - **From Name**: ARWAD Trading
   - **From Email Address**: noreply@arwad.org (or your verified email)
   - **Reply To**: info@arwad.org
   - **Company Address**: 102, Al Qouz 3, Bur Dubai, UAE
   - **City**: Dubai
   - **Country**: United Arab Emirates
4. Click "Create"
5. Check your email and click the verification link

### Option B: Domain Authentication (Recommended for production)

1. Go to SendGrid Dashboard → Settings → Sender Authentication
2. Click "Authenticate Your Domain"
3. Follow the DNS configuration steps
4. Add the required DNS records to your domain
5. Wait for verification (can take up to 48 hours)

## Step 3: Create API Key

1. Go to SendGrid Dashboard → Settings → API Keys
2. Click "Create API Key"
3. Name: `ARWAD Trading Production`
4. API Key Permissions: **Full Access** (or "Restricted Access" with "Mail Send" permission)
5. Click "Create & View"
6. **IMPORTANT**: Copy the API key immediately (you won't see it again!)
7. Save it securely

Example API key format: `SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

## Step 4: Configure Environment Variables

Add these environment variables to your deployment platform:

### For Vercel:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add the following:

```bash
# SendGrid Configuration
SENDGRID_API_KEY=SG.your_actual_api_key_here
SENDGRID_FROM_EMAIL=noreply@arwad.org
SENDGRID_FROM_NAME=ARWAD Trading
```

3. Select environments: Production, Preview, Development
4. Click "Save"

### For Local Development:

Create/update `.env` file in project root:

```bash
# SendGrid Configuration
SENDGRID_API_KEY=SG.your_actual_api_key_here
SENDGRID_FROM_EMAIL=noreply@arwad.org
SENDGRID_FROM_NAME=ARWAD Trading
```

**Note**: Never commit `.env` file to Git!

## Step 5: Test Email Sending

### Test Quote Request Email

1. Go to your website
2. Navigate to Quote Order page
3. Fill in the form with your test email
4. Submit the form
5. Check your inbox for confirmation email

### Test Contact Form Email

1. Go to your website
2. Navigate to Contact page
3. Fill in the form with your test email
4. Submit the form
5. Check your inbox for confirmation email

## Email Templates

The application includes two professional HTML email templates:

### Quote Confirmation Email
- **Subject**: "Quote Request Received - ARWAD Trading"
- **Content**: 
  - Confirmation message
  - Request details (company, industry, phone, email)
  - List of requested items
  - Next steps timeline
  - WhatsApp contact button
  - Company contact information

### Contact Confirmation Email
- **Subject**: "Message Received - ARWAD Trading"
- **Content**:
  - Confirmation message
  - Message details (subject, phone, email)
  - Copy of submitted message
  - Response time expectations
  - Contact methods for urgent matters
  - WhatsApp contact button
  - Company contact information

## Troubleshooting

### Issue: Emails not being sent

**Check 1: API Key**
- Verify `SENDGRID_API_KEY` is set correctly
- Ensure no extra spaces or quotes
- Check API key has "Mail Send" permission

**Check 2: Sender Verification**
- Verify sender email is verified in SendGrid
- Check `SENDGRID_FROM_EMAIL` matches verified email

**Check 3: Server Logs**
- Check application logs for SendGrid errors
- Look for "[Email]" prefixed log messages

### Issue: Emails going to spam

**Solutions:**
1. Use domain authentication instead of single sender
2. Add SPF and DKIM records to your domain
3. Avoid spam trigger words in subject/content
4. Ensure "From" email matches your domain

### Issue: "403 Forbidden" Error

**Cause**: API key doesn't have proper permissions

**Solution**: 
1. Go to SendGrid → Settings → API Keys
2. Delete old key
3. Create new key with "Mail Send" permission

### Issue: "Sender email not verified"

**Cause**: Sender email not verified in SendGrid

**Solution**:
1. Go to SendGrid → Settings → Sender Authentication
2. Verify your sender email
3. Check verification email and click link

## SendGrid Free Tier Limits

- **100 emails/day** - Forever free
- **2,000 contacts**
- **Single sender verification**
- **Email API access**

## Upgrading SendGrid Plan

If you need more emails:

1. **Essentials Plan** ($19.95/month)
   - 50,000 emails/month
   - Domain authentication
   - Email support

2. **Pro Plan** ($89.95/month)
   - 100,000 emails/month
   - Dedicated IP
   - Phone support

## Monitoring Email Delivery

### SendGrid Dashboard

1. Go to SendGrid Dashboard → Activity
2. View email delivery statistics:
   - Delivered
   - Opened
   - Clicked
   - Bounced
   - Spam reports

### Email Activity Feed

1. Go to SendGrid Dashboard → Activity Feed
2. Search for specific emails
3. View delivery status and errors

## Best Practices

1. **Use Domain Authentication** - Better deliverability
2. **Monitor Bounce Rate** - Keep below 5%
3. **Handle Unsubscribes** - Add unsubscribe links if needed
4. **Test Before Production** - Send test emails first
5. **Keep Templates Updated** - Ensure contact info is current
6. **Monitor API Usage** - Check daily limit usage

## Security Considerations

1. **Never expose API key** - Keep in environment variables only
2. **Use HTTPS** - Always use secure connections
3. **Rotate API keys** - Change periodically for security
4. **Limit API permissions** - Only grant "Mail Send" permission
5. **Monitor for abuse** - Watch for unusual sending patterns

## Alternative Email Services

If you prefer not to use SendGrid, the code can be adapted for:

- **AWS SES** (Amazon Simple Email Service)
- **Mailgun**
- **Postmark**
- **Resend**
- **SMTP.com**

The email service is abstracted in `server/email.ts` for easy replacement.

## Support

- **SendGrid Documentation**: https://docs.sendgrid.com/
- **SendGrid Support**: https://support.sendgrid.com/
- **API Reference**: https://docs.sendgrid.com/api-reference/mail-send/mail-send

---

**Last Updated**: November 2024
**Version**: 1.0.0

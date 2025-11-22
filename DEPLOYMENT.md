# ARWAD Trading - Production Deployment Guide

Complete guide for deploying the full-stack ARWAD Trading website to production with GitHub, Vercel, and MongoDB Atlas.

---

## 🎯 Deployment Overview

**Tech Stack:**
- **Frontend:** React 19 + TypeScript + Tailwind CSS 4
- **Backend:** Node.js + tRPC + Express
- **Database:** MongoDB (via Drizzle ORM)
- **Hosting:** Vercel (Frontend + Serverless Functions)
- **Version Control:** GitHub

**What You'll Get:**
- ✅ Full website with all 8 pages
- ✅ Admin dashboard for managing quotes and contacts
- ✅ Database storage for all form submissions
- ✅ Email confirmation system
- ✅ Analytics dashboard
- ✅ User authentication
- ✅ WhatsApp integration
- ✅ Bilingual EN/AR support
- ✅ Automatic SSL certificates
- ✅ Custom domain support

---

## 📋 Prerequisites

Before starting, you'll need accounts for:

1. **GitHub Account** - https://github.com
   - Free tier is sufficient
   
2. **Vercel Account** - https://vercel.com
   - Sign up with your GitHub account (recommended)
   - Free tier includes:
     * Unlimited deployments
     * Automatic SSL
     * Custom domains
     * Serverless functions
   
3. **MongoDB Atlas Account** - https://www.mongodb.com/cloud/atlas
   - Free tier (M0) includes:
     * 512 MB storage
     * Shared RAM
     * Perfect for production use

---

## 🗄️ Step 1: MongoDB Atlas Setup

### 1.1 Create MongoDB Atlas Cluster

1. Go to https://www.mongodb.com/cloud/atlas/register
2. Sign up or log in
3. Click **"Build a Database"**
4. Select **FREE** tier (M0 Sandbox)
5. Choose **AWS** as cloud provider
6. Select region closest to your users (e.g., **AWS / eu-central-1 (Frankfurt)** for Middle East)
7. Name your cluster: `arwad-cluster`
8. Click **"Create"**

### 1.2 Create Database User

1. In Atlas dashboard, click **"Database Access"** (left sidebar)
2. Click **"Add New Database User"**
3. Choose **"Password"** authentication
4. Username: `arwad_admin`
5. Click **"Autogenerate Secure Password"** - **SAVE THIS PASSWORD!**
6. Database User Privileges: **"Atlas admin"**
7. Click **"Add User"**

### 1.3 Configure Network Access

1. Click **"Network Access"** (left sidebar)
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (0.0.0.0/0)
   - This is safe because authentication is required
4. Click **"Confirm"**

### 1.4 Get Connection String

1. Click **"Database"** (left sidebar)
2. Click **"Connect"** button on your cluster
3. Select **"Connect your application"**
4. Driver: **Node.js**, Version: **5.5 or later**
5. Copy the connection string - it looks like:
   ```
   mongodb+srv://arwad_admin:<password>@arwad-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
6. Replace `<password>` with the password you saved earlier
7. **SAVE THIS CONNECTION STRING** - you'll need it for Vercel

---

## 🐙 Step 2: GitHub Repository Setup

### 2.1 Initialize Git Repository (if not already done)

```bash
cd /home/ubuntu/arwad-trading
git init
git add .
git commit -m "Initial commit: ARWAD Trading full-stack website"
```

### 2.2 Connect to GitHub Repository

You already have a repository at: **https://github.com/SinanZo/Arwad**

```bash
git remote add origin https://github.com/SinanZo/Arwad.git
git branch -M main
git push -u origin main
```

**Note:** You may need to authenticate with GitHub. Use a Personal Access Token if prompted.

### 2.3 Create Personal Access Token (if needed)

1. Go to https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Name: `Arwad Deployment`
4. Expiration: `90 days` (or your preference)
5. Select scopes: `repo` (full control of private repositories)
6. Click **"Generate token"**
7. **COPY THE TOKEN** - you won't see it again!
8. Use this token as your password when pushing to GitHub

---

## 🚀 Step 3: Vercel Deployment

### 3.1 Import Project from GitHub

1. Go to https://vercel.com/new
2. Click **"Import Git Repository"**
3. Select your GitHub account
4. Find and select **"SinanZo/Arwad"** repository
5. Click **"Import"**

### 3.2 Configure Project Settings

**Framework Preset:** Vite  
**Root Directory:** `./` (leave as default)  
**Build Command:** `pnpm build`  
**Output Directory:** `dist/public`  
**Install Command:** `pnpm install`

### 3.3 Add Environment Variables

Click **"Environment Variables"** and add these:

#### Required Variables:

| Variable Name | Value | Notes |
|--------------|-------|-------|
| `DATABASE_URL` | `mongodb+srv://arwad_admin:YOUR_PASSWORD@arwad-cluster.xxxxx.mongodb.net/arwad?retryWrites=true&w=majority` | Your MongoDB Atlas connection string |
| `JWT_SECRET` | `your-super-secret-jwt-key-min-32-chars` | Generate a random 32+ character string |
| `NODE_ENV` | `production` | Sets production mode |
| `VITE_APP_TITLE` | `ARWAD Trading` | Website title |
| `VITE_APP_LOGO` | `/logo-dark.png` | Logo path |

#### Generate JWT_SECRET:

Use this command to generate a secure random string:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Or use an online generator: https://randomkeygen.com/ (CodeIgniter Encryption Keys)

### 3.4 Deploy

1. Click **"Deploy"**
2. Wait 2-3 minutes for build to complete
3. You'll get a URL like: `https://arwad-xxxxx.vercel.app`

---

## 🌐 Step 4: Custom Domain Setup (Optional)

### 4.1 Add Custom Domain in Vercel

1. Go to your project dashboard in Vercel
2. Click **"Settings"** → **"Domains"**
3. Enter your domain (e.g., `www.arwad.org`)
4. Click **"Add"**

### 4.2 Configure DNS

Vercel will show you DNS records to add. In your domain registrar:

**For root domain (arwad.org):**
- Type: `A`
- Name: `@`
- Value: `76.76.19.19` (Vercel's IP)

**For www subdomain (www.arwad.org):**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

**Wait 24-48 hours** for DNS propagation (usually faster).

---

## 🔧 Step 5: Post-Deployment Configuration

### 5.1 Initialize Database Schema

After first deployment, run database migration:

1. In Vercel dashboard, go to **"Settings"** → **"Functions"**
2. Or connect to your MongoDB Atlas and the schema will auto-create on first use

### 5.2 Create Admin User

1. Visit your deployed website
2. Go to `/register` page
3. Create your admin account
4. The first user is automatically an admin

### 5.3 Test All Features

- ✅ Homepage loads correctly
- ✅ All pages accessible (About, Industries, Products, Services, Contact)
- ✅ Language toggle (EN/AR) works
- ✅ Theme toggle (Light/Dark) works
- ✅ WhatsApp button opens chat
- ✅ Contact form submits successfully
- ✅ Quote form submits successfully
- ✅ Admin login works
- ✅ Admin dashboard shows data
- ✅ Analytics page displays charts

---

## 📧 Step 6: Email Configuration (Optional)

To enable actual email sending (currently emails are logged):

### Option 1: SendGrid (Recommended)

1. Sign up at https://sendgrid.com
2. Create API key
3. Add to Vercel environment variables:
   - `SENDGRID_API_KEY`: Your API key
   - `SENDGRID_FROM_EMAIL`: Your verified sender email

### Option 2: AWS SES

1. Set up AWS SES
2. Add to Vercel environment variables:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `AWS_REGION`
   - `AWS_SES_FROM_EMAIL`

### Option 3: SMTP

Add to Vercel environment variables:
- `SMTP_HOST`: Your SMTP server
- `SMTP_PORT`: Usually 587
- `SMTP_USER`: Your email
- `SMTP_PASS`: Your password
- `SMTP_FROM`: Sender email

Then update `server/email.ts` to use your chosen service.

---

## 🔄 Step 7: Continuous Deployment

**Automatic Deployments:**
- Every push to `main` branch triggers automatic deployment
- Vercel builds and deploys automatically
- No manual steps needed!

**Development Workflow:**
```bash
# Make changes locally
git add .
git commit -m "Add new feature"
git push origin main

# Vercel automatically deploys in ~2 minutes
```

---

## 📊 Monitoring & Analytics

### Vercel Analytics

1. In Vercel dashboard, go to **"Analytics"**
2. Enable **Web Analytics** (free)
3. See real-time visitor data, page views, and performance

### MongoDB Atlas Monitoring

1. In Atlas dashboard, go to **"Metrics"**
2. Monitor database operations, connections, and storage

---

## 🐛 Troubleshooting

### Build Fails on Vercel

**Error:** `Cannot find module 'xyz'`
- **Solution:** Check `package.json` dependencies are correct
- Run `pnpm install` locally to verify

**Error:** `Build exceeded maximum duration`
- **Solution:** Increase timeout in Vercel settings or optimize build

### Database Connection Issues

**Error:** `MongoServerError: bad auth`
- **Solution:** Check DATABASE_URL password is correct
- Verify database user has correct permissions

**Error:** `Connection timeout`
- **Solution:** Check Network Access in MongoDB Atlas
- Ensure 0.0.0.0/0 is allowed

### Environment Variables Not Working

- **Solution:** Redeploy after adding environment variables
- Go to **"Deployments"** → Click **"..."** → **"Redeploy"**

### Forms Not Submitting

- **Solution:** Check browser console for errors
- Verify DATABASE_URL is set correctly in Vercel
- Check MongoDB Atlas cluster is running

---

## 🔐 Security Best Practices

1. **Never commit `.env` files** to GitHub
2. **Use strong JWT_SECRET** (32+ characters, random)
3. **Rotate database passwords** regularly
4. **Enable 2FA** on GitHub, Vercel, and MongoDB Atlas
5. **Monitor Vercel logs** for suspicious activity
6. **Keep dependencies updated** with `pnpm update`

---

## 💰 Cost Breakdown

**Free Tier Limits:**

| Service | Free Tier | Limits |
|---------|-----------|--------|
| **Vercel** | ✅ Free | 100 GB bandwidth/month, Unlimited deployments |
| **MongoDB Atlas** | ✅ Free | 512 MB storage, Shared RAM |
| **GitHub** | ✅ Free | Unlimited public/private repos |

**When to Upgrade:**

- **Vercel:** Upgrade if you exceed 100 GB bandwidth (~100K visitors/month)
- **MongoDB:** Upgrade if you exceed 512 MB storage (~50K quotes/contacts)

---

## 📞 Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **MongoDB Atlas Docs:** https://docs.atlas.mongodb.com
- **GitHub Docs:** https://docs.github.com

---

## ✅ Deployment Checklist

- [ ] MongoDB Atlas cluster created
- [ ] Database user created with password saved
- [ ] Network access configured (0.0.0.0/0)
- [ ] Connection string obtained
- [ ] GitHub repository set up
- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Environment variables added to Vercel
- [ ] Project deployed successfully
- [ ] Custom domain configured (optional)
- [ ] All features tested on production
- [ ] Admin account created
- [ ] Email service configured (optional)

---

**Deployed:** $(date)  
**Version:** Production Full-Stack  
**Company:** ARWAD Trading - MRO & Supply Chain Solutions  
**Repository:** https://github.com/SinanZo/Arwad

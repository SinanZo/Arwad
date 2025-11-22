# ARWAD Trading - Vercel Deployment Quick Start

## 🚀 Deploy to Vercel in 10 Minutes

Follow these steps to deploy your full-stack ARWAD Trading website to production.

---

## Step 1: Import Project to Vercel

1. Go to **https://vercel.com/new**
2. Sign in with GitHub (or create account)
3. Click **"Import Git Repository"**
4. Select **"SinanZo/Arwad"** from the list
5. Click **"Import"**

---

## Step 2: Configure Build Settings

On the import screen, configure these settings:

**Framework Preset:** `Vite`  
**Root Directory:** `./` (leave as default)  
**Build Command:** `pnpm build`  
**Output Directory:** `dist/public`  
**Install Command:** `pnpm install`  
**Node.js Version:** `22.x` (or latest)

---

## Step 3: Add Environment Variables

Click **"Environment Variables"** section and add these **EXACT** values:

### Copy and paste each variable:

```
DATABASE_URL
```
```
mongodb+srv://szuaiter_db_user:HfVaU6nnOZFLpkoo@arwadcluster.3g5bo3y.mongodb.net/arwad?retryWrites=true&w=majority
```

```
JWT_SECRET
```
```
cc81ce1d6a4badd49887bb0a9939730021788207b714179cf492c342186f0ac5
```

```
NODE_ENV
```
```
production
```

```
VITE_APP_TITLE
```
```
ARWAD Trading
```

```
VITE_APP_LOGO
```
```
/logo-dark.png
```

### How to add each variable:

1. Type the **variable name** in the "Key" field (e.g., `DATABASE_URL`)
2. Paste the **value** in the "Value" field
3. Select **"Production"**, **"Preview"**, and **"Development"** (all three)
4. Click **"Add"**
5. Repeat for all 5 variables above

---

## Step 4: Deploy

1. After adding all environment variables, click **"Deploy"**
2. Wait 2-3 minutes for the build to complete
3. You'll see "Congratulations!" when done
4. Click **"Visit"** to see your live website!

Your website will be live at: `https://arwad-xxxxx.vercel.app`

---

## Step 5: Test Your Deployment

Visit your deployed website and test:

✅ **Homepage loads** - Check all sections display correctly  
✅ **Navigation works** - Click through all pages  
✅ **Language toggle** - Switch between English and Arabic  
✅ **Theme toggle** - Switch between light and dark mode  
✅ **WhatsApp button** - Opens chat with +971-50-1028312  
✅ **Contact form** - Submit a test message  
✅ **Quote form** - Submit a test quote request  
✅ **Admin login** - Go to `/register` and create admin account  
✅ **Admin dashboard** - View quotes and contacts  
✅ **Analytics** - Check charts display correctly  

---

## Step 6: Set Up Custom Domain (Optional)

### Add Your Domain to Vercel:

1. In Vercel dashboard, go to **Settings** → **Domains**
2. Enter your domain: `www.arwad.org` (or `arwad.org`)
3. Click **"Add"**

### Configure DNS Records:

Vercel will show you which DNS records to add. Go to your domain registrar and add:

**For www.arwad.org:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`
- TTL: `3600` (or Auto)

**For arwad.org (root domain):**
- Type: `A`
- Name: `@`
- Value: `76.76.19.19`
- TTL: `3600` (or Auto)

**Wait 10-60 minutes** for DNS to propagate, then your site will be live on your custom domain!

---

## Step 7: Create Your Admin Account

1. Visit your deployed website
2. Go to `/register` page
3. Fill in the registration form:
   - Full Name: Your name
   - Email: Your email
   - Password: Choose a strong password
4. Click **"Register"**
5. You're automatically logged in as admin!

---

## 🎉 You're Done!

Your full-stack ARWAD Trading website is now live with:

✅ All 8 pages (Home, About, Industries, Products, Services, Contact, Register, Quote)  
✅ Admin dashboard for managing quotes and contacts  
✅ MongoDB database storing all submissions  
✅ Email confirmation system (ready for SMTP setup)  
✅ Analytics dashboard with charts  
✅ Bilingual EN/AR support  
✅ Light/Dark theme  
✅ WhatsApp integration  
✅ Automatic SSL certificate  
✅ Professional industrial design  

---

## 📊 Monitor Your Website

### Vercel Dashboard:
- **Analytics:** See visitor stats, page views, performance
- **Deployments:** View deployment history and logs
- **Logs:** Debug any issues in real-time

### MongoDB Atlas:
- Go to https://cloud.mongodb.com
- Login with your credentials
- View **Metrics** to see database operations
- View **Browse Collections** to see stored quotes and contacts

---

## 🔄 Update Your Website

Every time you push to GitHub, Vercel automatically deploys!

```bash
# Make changes to your code
git add .
git commit -m "Update feature"
git push origin main

# Vercel automatically builds and deploys in ~2 minutes
```

---

## 🐛 Troubleshooting

### Build Failed?

**Check the build logs in Vercel:**
1. Go to **Deployments** tab
2. Click on the failed deployment
3. Read the error message
4. Common fixes:
   - Verify all environment variables are set correctly
   - Check DATABASE_URL has correct password
   - Ensure MongoDB Atlas allows connections from anywhere (0.0.0.0/0)

### Database Not Working?

**Verify MongoDB Atlas settings:**
1. Go to https://cloud.mongodb.com
2. Click **Network Access** → Ensure `0.0.0.0/0` is allowed
3. Click **Database Access** → Verify user `szuaiter_db_user` exists
4. Test connection string in Vercel environment variables

### Forms Not Submitting?

**Check browser console:**
1. Right-click → Inspect → Console tab
2. Look for error messages
3. Verify API endpoints are working
4. Check Vercel logs for backend errors

---

## 📞 Need Help?

- **Vercel Support:** https://vercel.com/support
- **MongoDB Support:** https://www.mongodb.com/cloud/atlas/support
- **Deployment Guide:** See `DEPLOYMENT.md` for detailed instructions

---

## 🔐 Important Security Notes

✅ **Never share your JWT_SECRET** - It's already set in Vercel  
✅ **Never commit .env files** to GitHub  
✅ **Rotate database password** every 90 days  
✅ **Enable 2FA** on Vercel and MongoDB Atlas  
✅ **Monitor logs** regularly for suspicious activity  

---

**Repository:** https://github.com/SinanZo/Arwad  
**MongoDB Cluster:** ArwadCluster  
**Database User:** szuaiter_db_user  

**Ready to deploy? Start with Step 1 above! 🚀**

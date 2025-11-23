# ARWAD Trading - Vercel Serverless Deployment Guide

This guide explains how to deploy the ARWAD Trading website to Vercel using serverless functions.

## Architecture Overview

The application has been adapted for Vercel's serverless architecture:

- **Frontend**: Static React app built with Vite → deployed to Vercel CDN
- **Backend API**: Serverless functions in `/api` directory → deployed as Vercel Functions
- **Database**: MongoDB Atlas (already configured)
- **Authentication**: OAuth via serverless function

## Prerequisites

1. **GitHub Account** - Code must be pushed to GitHub
2. **Vercel Account** - Sign up at https://vercel.com
3. **MongoDB Atlas** - Already configured (see MONGODB_SETUP.md)
4. **Environment Variables** - See section below

## Step 1: Prepare Environment Variables

You need to set these environment variables in Vercel:

### Required Environment Variables

```bash
# Database Connection
DATABASE_URL=mongodb+srv://szuaiter_db_user:HfVaU6nnOZFLpkoo@arwadcluster.5qgxh.mongodb.net/arwad_db?retryWrites=true&w=majority&appName=ArwadCluster

# Authentication
JWT_SECRET=arwad_jwt_secret_2024_secure_key_change_in_production

# Application Configuration
VITE_APP_TITLE=ARWAD Trading - MRO & Supply Chain Solutions
VITE_APP_LOGO=/logo-dark.svg

# Owner Information (for admin access)
OWNER_NAME=Admin
OWNER_OPEN_ID=your-manus-open-id

# SendGrid Email Service (for automated confirmations)
SENDGRID_API_KEY=SG.your_sendgrid_api_key_here
SENDGRID_FROM_EMAIL=noreply@arwad.org
SENDGRID_FROM_NAME=ARWAD Trading

# Manus OAuth (if using Manus authentication)
OAUTH_SERVER_URL=https://oauth.manus.im
VITE_OAUTH_PORTAL_URL=https://portal.manus.im
VITE_APP_ID=your-app-id
BUILT_IN_FORGE_API_URL=https://api.manus.im
BUILT_IN_FORGE_API_KEY=your-forge-api-key
VITE_FRONTEND_FORGE_API_KEY=your-frontend-forge-key
VITE_FRONTEND_FORGE_API_URL=https://api.manus.im
```

## Step 2: Push Code to GitHub

```bash
# Make sure all changes are committed
git add .
git commit -m "Adapt for Vercel serverless deployment"
git push origin main
```

## Step 3: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)

1. Go to https://vercel.com/new
2. Click "Import Project"
3. Select your GitHub repository: `SinanZo/Arwad`
4. Configure project:
   - **Framework Preset**: Other
   - **Build Command**: `pnpm build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `pnpm install`
5. Add all environment variables from Step 1
6. Click "Deploy"

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Link to existing project or create new
# - Confirm settings
# - Add environment variables when prompted

# Deploy to production
vercel --prod
```

## Step 4: Configure Environment Variables in Vercel

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Environment Variables"
3. Add each variable from Step 1:
   - Name: `DATABASE_URL`
   - Value: `mongodb+srv://szuaiter_db_user:HfVaU6nnOZFLpkoo@arwadcluster.5qgxh.mongodb.net/arwad_db?retryWrites=true&w=majority&appName=ArwadCluster`
   - Environment: Production, Preview, Development (select all)
4. Repeat for all variables
5. Click "Save"

## Step 5: Redeploy After Adding Environment Variables

After adding environment variables, trigger a new deployment:

1. Go to "Deployments" tab
2. Click the three dots on the latest deployment
3. Click "Redeploy"

OR push a new commit to GitHub to trigger automatic deployment.

## Step 6: Verify Deployment

### Test Frontend
Visit your Vercel URL (e.g., `https://arwad-trading.vercel.app`)

### Test API Endpoints

```bash
# Test tRPC endpoint
curl https://your-domain.vercel.app/api/trpc/auth.me

# Test OAuth callback (should redirect)
curl -I https://your-domain.vercel.app/api/oauth/callback
```

### Test Admin Dashboard
1. Navigate to `/admin`
2. Login with your credentials
3. Verify quotes and contacts are loading from MongoDB

## Serverless Function Structure

The application uses these serverless functions:

```
/api
├── trpc/
│   └── [trpc].ts          # Main tRPC API handler (all queries/mutations)
└── oauth/
    └── callback.ts        # OAuth authentication callback
```

## Troubleshooting

### Issue: "Function Invocation Failed"

**Cause**: Environment variables not set or incorrect

**Solution**: 
1. Check all environment variables are set in Vercel
2. Redeploy after adding variables
3. Check function logs in Vercel dashboard

### Issue: "Database Connection Failed"

**Cause**: DATABASE_URL incorrect or MongoDB Atlas not accessible

**Solution**:
1. Verify MongoDB Atlas cluster is running
2. Check IP whitelist in MongoDB Atlas (should allow all: 0.0.0.0/0)
3. Test connection string locally first

### Issue: "CORS Errors"

**Cause**: CORS headers not properly configured

**Solution**: The `vercel.json` already includes CORS headers. If still having issues:
1. Check browser console for specific error
2. Verify API requests are going to correct domain
3. Check Vercel function logs

### Issue: "Admin Routes Return 401"

**Cause**: Authentication not working or user not admin

**Solution**:
1. Check JWT_SECRET is set
2. Verify OWNER_OPEN_ID matches your user's openId in database
3. Check cookies are being set properly (check browser DevTools)

## Custom Domain Setup

After successful deployment:

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain (e.g., `www.arwad.org`)
3. Follow DNS configuration instructions
4. Wait for DNS propagation (can take up to 48 hours)

## Performance Optimization

Vercel automatically provides:
- ✅ Global CDN for static assets
- ✅ Automatic HTTPS/SSL
- ✅ Serverless function edge caching
- ✅ Image optimization (if using Vercel Image component)

## Monitoring

Monitor your deployment:

1. **Vercel Analytics**: Enable in project settings for visitor analytics
2. **Function Logs**: View in Vercel Dashboard → Your Project → Functions
3. **MongoDB Monitoring**: Check MongoDB Atlas dashboard for database metrics

## Cost Considerations

**Vercel Free Tier Includes:**
- 100 GB bandwidth
- 100 GB-hours serverless function execution
- Unlimited deployments
- Custom domains

**Upgrade if you need:**
- More bandwidth
- More function execution time
- Team collaboration features

## Next Steps

1. ✅ Test all pages and functionality
2. ✅ Test form submissions (Quote Order, Contact)
3. ✅ Test admin dashboard
4. ✅ Configure custom domain
5. ✅ Set up monitoring and alerts
6. ✅ Configure email SMTP for automated confirmations (optional)

## Support

- **Vercel Documentation**: https://vercel.com/docs
- **MongoDB Atlas Support**: https://www.mongodb.com/docs/atlas/
- **Project Issues**: https://github.com/SinanZo/Arwad/issues

---

**Deployment Date**: November 2024
**Version**: 1.0.0 (Serverless)

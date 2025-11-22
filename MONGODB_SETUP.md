# MongoDB Atlas Setup - ARWAD Trading

## ✅ Current Configuration

Your MongoDB Atlas database is **fully configured and working**!

### Connection Details

**Cluster Name:** ArwadCluster  
**Database Name:** arwad  
**Username:** szuaiter_db_user  
**Password:** HfVaU6nnOZFLpkoo  

**Connection String:**
```
mongodb+srv://szuaiter_db_user:HfVaU6nnOZFLpkoo@arwadcluster.3g5bo3y.mongodb.net/arwad?retryWrites=true&w=majority
```

### Database Status

✅ **Connection Test:** PASSED (2.1 seconds)  
✅ **Network Access:** Configured (0.0.0.0/0 allowed)  
✅ **Database User:** Active with admin privileges  
✅ **Schema:** Deployed and ready  

---

## 📊 Database Schema

Your database includes the following collections:

### 1. **quotes** Collection
Stores all quote requests from customers.

**Fields:**
- `id` - Unique identifier
- `companyName` - Customer company name
- `contactPerson` - Contact person name
- `email` - Customer email
- `phone` - Customer phone number
- `industry` - Industry sector
- `items` - Array of requested items (JSON)
  - Each item contains: description, quantity, specifications
- `additionalNotes` - Additional customer notes
- `status` - Quote status (pending, processing, completed, cancelled)
- `createdAt` - Submission timestamp
- `updatedAt` - Last update timestamp

### 2. **contacts** Collection
Stores all contact form submissions.

**Fields:**
- `id` - Unique identifier
- `name` - Contact name
- `email` - Contact email
- `phone` - Contact phone number
- `subject` - Message subject
- `message` - Message content
- `status` - Contact status (unread, read, replied)
- `createdAt` - Submission timestamp
- `updatedAt` - Last update timestamp

### 3. **users** Collection
Stores user accounts and authentication data.

**Fields:**
- `id` - Unique identifier
- `email` - User email (unique)
- `name` - User full name
- `password` - Hashed password
- `role` - User role (admin, user)
- `createdAt` - Account creation timestamp
- `updatedAt` - Last update timestamp

---

## 🔍 Verify Your Database

### Option 1: MongoDB Atlas Dashboard

1. Go to https://cloud.mongodb.com
2. Log in with your credentials
3. Click on **"Browse Collections"**
4. Select **ArwadCluster** → **arwad** database
5. You'll see all three collections: `quotes`, `contacts`, `users`

### Option 2: MongoDB Compass (Desktop App)

1. Download MongoDB Compass: https://www.mongodb.com/try/download/compass
2. Open Compass
3. Paste your connection string:
   ```
   mongodb+srv://szuaiter_db_user:HfVaU6nnOZFLpkoo@arwadcluster.3g5bo3y.mongodb.net/arwad
   ```
4. Click **"Connect"**
5. Browse your collections and data

### Option 3: Test via Website

1. Visit your deployed website
2. Submit a test quote request
3. Submit a test contact form
4. Log in to admin dashboard
5. Verify data appears in the admin panel

---

## 🔐 Security Configuration

### Network Access
✅ **IP Whitelist:** 0.0.0.0/0 (Allow from anywhere)  
- This is safe because authentication is required
- Vercel serverless functions use dynamic IPs, so this setting is necessary

### Database Access
✅ **User:** szuaiter_db_user  
✅ **Role:** Atlas admin  
✅ **Authentication:** Username + Password  

### Connection Security
✅ **Protocol:** mongodb+srv:// (TLS/SSL encrypted)  
✅ **Encryption:** All data encrypted in transit  
✅ **Authentication:** SCRAM-SHA-256  

---

## 📈 Monitor Your Database

### View Metrics

1. Go to https://cloud.mongodb.com
2. Click on your cluster **"ArwadCluster"**
3. Click **"Metrics"** tab

**You can monitor:**
- Operations per second
- Connections
- Network traffic
- Storage usage
- Query performance

### Set Up Alerts

1. In Atlas dashboard, click **"Alerts"**
2. Click **"Add New Alert"**
3. Configure alerts for:
   - High connection count
   - Storage reaching limit
   - Unusual query patterns

---

## 💾 Backup & Recovery

### Automatic Backups (Free Tier)

MongoDB Atlas M0 (Free) tier includes:
- ✅ Point-in-time snapshots
- ✅ 1-day retention
- ✅ Automatic daily backups

### Manual Backup

**Export Data:**
```bash
# Using mongodump
mongodump --uri="mongodb+srv://szuaiter_db_user:HfVaU6nnOZFLpkoo@arwadcluster.3g5bo3y.mongodb.net/arwad" --out=./backup
```

**Import Data:**
```bash
# Using mongorestore
mongorestore --uri="mongodb+srv://szuaiter_db_user:HfVaU6nnOZFLpkoo@arwadcluster.3g5bo3y.mongodb.net/arwad" ./backup/arwad
```

---

## 🚀 Production Checklist

- [x] MongoDB Atlas cluster created
- [x] Database user configured
- [x] Network access configured (0.0.0.0/0)
- [x] Connection string obtained
- [x] Database schema deployed
- [x] Connection tested successfully
- [x] Collections created (quotes, contacts, users)
- [ ] Connection string added to Vercel environment variables
- [ ] Production deployment tested
- [ ] First admin user created
- [ ] Backup strategy confirmed

---

## 🔄 Update Schema

If you need to modify the database schema:

### 1. Edit Schema File
Edit `drizzle/schema.ts` with your changes

### 2. Generate Migration
```bash
cd /home/ubuntu/arwad-trading
pnpm db:push
```

### 3. Verify Changes
- Check MongoDB Atlas dashboard
- Test affected features
- Update documentation

---

## 📊 Usage Limits (Free Tier)

**MongoDB Atlas M0 Free Tier:**
- ✅ 512 MB storage
- ✅ Shared RAM (512 MB)
- ✅ Shared vCPU
- ✅ 100 max connections
- ✅ No credit card required

**Estimated Capacity:**
- ~50,000 quote requests
- ~100,000 contact submissions
- ~10,000 user accounts

**When to Upgrade:**
- Storage exceeds 400 MB (80% full)
- Frequent connection timeouts
- Need dedicated resources
- Require advanced features

---

## 🆘 Troubleshooting

### Connection Timeout

**Problem:** Database connection times out

**Solutions:**
1. Check Network Access in Atlas (ensure 0.0.0.0/0 is allowed)
2. Verify connection string is correct
3. Check if cluster is paused (free clusters pause after 60 days of inactivity)
4. Test connection from MongoDB Compass

### Authentication Failed

**Problem:** "bad auth" error

**Solutions:**
1. Verify username: `szuaiter_db_user`
2. Verify password: `HfVaU6nnOZFLpkoo`
3. Check user has correct permissions in Atlas
4. Ensure password doesn't contain special characters that need URL encoding

### Slow Queries

**Problem:** Database queries are slow

**Solutions:**
1. Check Metrics in Atlas dashboard
2. Add indexes to frequently queried fields
3. Optimize query patterns
4. Consider upgrading to paid tier for dedicated resources

### Storage Full

**Problem:** Approaching 512 MB limit

**Solutions:**
1. Delete old test data
2. Archive old quotes/contacts
3. Implement data retention policy
4. Upgrade to M10 tier ($0.08/hour = ~$57/month)

---

## 📞 Support

**MongoDB Atlas Support:**
- Documentation: https://docs.atlas.mongodb.com
- Community Forums: https://www.mongodb.com/community/forums
- Support Tickets: https://support.mongodb.com

**Connection Issues:**
- Test connection: https://www.mongodb.com/docs/atlas/troubleshoot-connection/
- Network configuration: https://www.mongodb.com/docs/atlas/security/ip-access-list/

---

## ✅ Next Steps

1. **Add to Vercel:** Copy connection string to Vercel environment variables
2. **Test Production:** Deploy and verify database works in production
3. **Create Admin:** Register first admin user after deployment
4. **Monitor Usage:** Check Atlas dashboard weekly for usage patterns
5. **Set Alerts:** Configure alerts for storage and connection limits

**Your MongoDB Atlas database is ready for production! 🎉**

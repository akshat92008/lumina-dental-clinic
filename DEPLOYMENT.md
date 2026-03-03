# Deployment Guide - 100% Free & Permanent

This guide setup uses **Supabase** for the database, **Netlify** for the frontend, and **Render** for the backend—all on their **Forever Free** tiers.

## Step 1: Database (Supabase)
1. Go to [Supabase.com](https://supabase.com) and create a free project.
2. Go to the **SQL Editor** in the sidebar.
3. Click "New Query" and paste the contents of `supabase_schema.sql` from your project folder. Run it.
4. Go to **Project Settings > API**.
5. Copy the **Project URL** and the **anon public API Key**.

## Step 2: Push to GitHub
Ensure all latest changes are pushed to your repository:
```bash
git add .
git commit -m "Migrate to Supabase for free permanent storage"
git push origin main
```

## Step 3: Frontend (Netlify)
1. Go to [Netlify.com](https://netlify.com) and login.
2. Click **Add new site > Import from existing project**.
3. Connect your GitHub repository.
4. In **Site Settings > Environment Variables**, add:
   - `SUPABASE_URL`: (Your Supabase URL)
   - `SUPABASE_ANON_KEY`: (Your Supabase Anon Key)
5. Click **Deploy**.

## Step 4: Backend (Render Free Tier)
1. Go to [Render.com](https://render.com).
2. Click **New + > Web Service**.
3. Connect your GitHub repository.
4. In **Environment Variables**, add:
   - `SUPABASE_URL`: (Your Supabase URL)
   - `SUPABASE_ANON_KEY`: (Your Supabase Anon Key)
5. Set **Start Command** to `node server/index.js`.
6. Click **Deploy**.

---

## Why this is better for your client:
- **Zero Monthly Cost**: No paid subscriptions needed for the client.
- **Permanent Data**: Appointments and leads are saved in a professional cloud database, not a local file.
- **Scalable**: If the clinic grows, these platforms can scale with them.

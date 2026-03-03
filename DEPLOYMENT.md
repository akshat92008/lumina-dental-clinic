# Final Launch Guide - 100% Free & Permanent

I have already started the process for you! I created your **Supabase Project** and **GitHub Repository**. Follow these exact steps to finish the launch.

## 1. Setup Database Tables (Supabase)
1.  Open your [Supabase Dashboard](https://supabase.com/dashboard/project/cmoplfdhwzfjpgahjxto).
2.  Click on the **SQL Editor** (icon looks like `>_`) in the left sidebar.
3.  Click **"New Query"**.
4.  Open the [supabase_schema.sql](file:///Users/ashishsingh/Desktop/lumina-dental-clinic/supabase_schema.sql) file in this folder, copy everything.
5.  Paste it into the Supabase SQL Editor and click **Run**.
6.  *Important:* Go to **Project Settings > API** and copy your **Project URL** and **anon public Key**.

## 2. Deploy Frontend (Netlify)
1.  Go to [Netlify.com](https://app.netlify.com/).
2.  Click **"Add new site" > "Import from existing project"**.
3.  Select **GitHub** and pick the `lumina-dental-clinic` repository.
4.  In **Site Settings > Environment Variables**, add:
    - `SUPABASE_URL`: (Your Supabase URL)
    - `SUPABASE_ANON_KEY`: (Your Supabase Anon Key)
5.  Click **Deploy**. This will give you your first public link!

## 3. Deploy Backend (Render)
*Since the frontend is on Netlify, Render will only handle the API calls for free.*
1.  Go to [Render.com](https://dashboard.render.com/).
2.  Click **New + > Web Service**.
3.  Connect your GitHub repository.
4.  In **Environment Variables**, add:
    - `SUPABASE_URL`: (Your Supabase URL)
    - `SUPABASE_ANON_KEY`: (Your Supabase Anon Key)
5.  Click **Deploy**.

---

## 🏁 Verification
Once both are live:
1.  Visit your Netlify URL.
2.  Submit a test appointment.
3.  Check your [Supabase Table Editor](https://supabase.com/dashboard/project/cmoplfdhwzfjpgahjxto/editor) to see the data appear instantly!

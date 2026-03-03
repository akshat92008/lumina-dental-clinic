# Deployment Guide - Lumina Dental Clinic

This document provides instructions on how to deploy the Lumina Dental Clinic website to a public server.

## Quick Deploy (Recommended): Render.com
Render is the easiest way to host this full-stack app while keeping your data persistent with SQLite.

### 1. Push Code to GitHub
Ensure all your project files (including the newly created `render.yaml`) are pushed to a GitHub repository.

### 2. Connect to Render
1. Go to [Render.com](https://dashboard.render.com/) and sign in.
2. Click **New +** and select **Blueprint**.
3. Connect your GitHub repository.
4. Render will automatically detect the `render.yaml` file and set up:
   - Your **Web Service** (Express backend + Frontend).
   - A **Persistent Disk** (to keep your `lumina.db` safe).
5. Click **Apply**.

### 3. Verification
Once deployed, your site will be live at a `.onrender.com` URL. Your data will persist even if the server restarts or you redeploy.

---

## Alternative: Manual Hosting (VPS)
If you prefer a traditional VPS (DigitalOcean, AWS, etc.), follow these steps:

### 1. Local Build
Before deploying, you need to generate the production build of the frontend:
```bash
npm run build
```
This creates a `dist/` folder in your project root.

### 2. Server Setup
Upload all files (including the `dist/` folder) to your server.

### 3. Install Dependencies
On your server, run:
```bash
npm install --production
```

### 4. Running the Application
The backend is now configured to serve the frontend static files. You only need to run the backend server.

#### Using PM2 (Recommended for Production):
```bash
npm install -g pm2
pm2 start server/index.js --name "lumina-dental"
pm2 save
pm2 startup
```

### 5. Reverse Proxy (Nginx)
Use Nginx to handle SSL and port 3001 mapping.

---

## Verification
After starting the server, visit your domain and verify:
1. The website loads correctly.
2. Forms (Appointments/Contact) are submitting and saving to the database.
3. SEO tags are present in the page source.
4. `/robots.txt` and `/sitemap.xml` are accessible.

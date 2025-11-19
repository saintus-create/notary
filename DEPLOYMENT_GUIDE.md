# 🚀 Vercel Deployment Guide

This guide will help you deploy the ChatGPT Atlas website to Vercel with just a few clicks.

## Prerequisites

- GitHub account (for code hosting)
- Vercel account (free tier available)

## Method 1: GitHub Integration (Recommended)

### Step 1: Prepare Your Repository

1. **Initialize Git repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: ChatGPT Atlas website"
   ```

2. **Create GitHub repository**
   - Go to [GitHub.com](https://github.com)
   - Click "New repository"
   - Name it: `chatgpt-atlas-website`
   - Make it public or private
   - Don't initialize with README (we already have one)

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/chatgpt-atlas-website.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/login with GitHub

2. **Import Project**
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect SvelteKit settings

3. **Configure Project**
   - **Framework Preset**: SvelteKit
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.svelte-kit/vercel` (auto-detected)
   - **Install Command**: `npm install` (default)

4. **Set Environment Variables**
   Add these environment variables in Vercel dashboard:
   ```
   VITE_PUBLIC_APP_NAME=ChatGPT Atlas
   VITE_PUBLIC_SITE_URL=https://your-project-name.vercel.app
   NODE_ENV=production
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (usually 1-2 minutes)
   - Get your live URL!

### Step 3: Configure Custom Domain (Optional)

1. **Add Custom Domain**
   - Go to your project in Vercel dashboard
   - Navigate to "Settings" > "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

2. **Update Environment Variable**
   ```
   VITE_PUBLIC_SITE_URL=https://yourdomain.com
   ```

## Method 2: Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

```bash
vercel
```

Follow the interactive prompts:
- Set up and deploy? **Y**
- Which scope? (select your account)
- Link to existing project? **N**
- What's your project's name? `chatgpt-atlas-website`
- In which directory is your code located? `./`
- Override settings? **N**

### Step 4: Set Environment Variables

```bash
vercel env add VITE_PUBLIC_APP_NAME
vercel env add VITE_PUBLIC_SITE_URL
vercel env add NODE_ENV
```

Set values:
- `VITE_PUBLIC_APP_NAME`: ChatGPT Atlas
- `VITE_PUBLIC_SITE_URL`: Your Vercel URL
- `NODE_ENV`: production

### Step 5: Redeploy with Environment Variables

```bash
vercel --prod
```

## Environment Variables Reference

### Required Variables

| Variable | Value | Description |
|----------|-------|-------------|
| `VITE_PUBLIC_APP_NAME` | ChatGPT Atlas | App name for meta tags |
| `VITE_PUBLIC_SITE_URL` | Your Vercel URL | Base URL for SEO |
| `NODE_ENV` | production | Production mode |

### Optional Variables

| Variable | Example Value | Description |
|----------|---------------|-------------|
| `VITE_PUBLIC_ANALYTICS_ID` | GA-XXXXXXXXX | Google Analytics ID |
| `VITE_PUBLIC_CONTACT_EMAIL` | contact@example.com | Contact email |

## Build Configuration

The project is pre-configured for Vercel deployment:

### `vercel.json`
```json
{
  "framework": "sveltekit",
  "buildCommand": "npm run build",
  "installCommand": "npm install",
  "outputDirectory": ".svelte-kit/vercel"
}
```

### `svelte.config.js`
```javascript
adapter: adapter({
  runtime: 'edge'
}),
```

## Performance Optimizations

Vercel automatically applies these optimizations:

- ✅ **Edge Runtime**: Global CDN distribution
- ✅ **Image Optimization**: Automatic image compression
- ✅ **Bundle Analysis**: Tree-shaking and code splitting
- ✅ **Static Optimization**: Pre-rendered pages
- ✅ **Caching**: Optimized caching headers

## Monitoring & Analytics

### Vercel Analytics
1. Go to your project dashboard
2. Click on "Analytics"
3. View performance metrics, core web vitals

### Adding Custom Analytics

1. **Add environment variable**
   ```
   VITE_PUBLIC_ANALYTICS_ID=G-XXXXXXXXX
   ```

2. **Add to your app** (optional)
   ```javascript
   // In your layout component
   if (import.meta.env.VITE_PUBLIC_ANALYTICS_ID) {
     // Add your analytics script
   }
   ```

## Troubleshooting

### Build Fails

**Common Issues:**
1. **Node.js version**: Ensure Node.js 18+ in Vercel dashboard
2. **Dependencies**: Check for peer dependency conflicts
3. **Build script**: Verify `npm run build` works locally

**Solutions:**
1. Update `package.json`:
   ```json
   "engines": {
     "node": ">=18.0.0"
   }
   ```

2. Clear cache and rebuild:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

### Environment Variables Not Working

**Check:**
1. Variable names start with `VITE_PUBLIC_`
2. Variables are set in correct environment (Production, Preview, Development)
3. Redeploy after adding variables

### 404 Errors After Deployment

**Solutions:**
1. Check `vercel.json` routing configuration
2. Ensure prerendering is enabled:
   ```javascript
   // svelte.config.js
   kit: {
     prerender: { entries: ['*'] }
   }
   ```

## Security

### Environment Variables Security
- ✅ Never commit `.env` files
- ✅ Use Vercel dashboard for production secrets
- ✅ Prefix client variables with `VITE_PUBLIC_`
- ✅ Keep sensitive server-side secrets private

### Headers Configuration
The `vercel.json` includes security headers:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- X-XSS-Protection: 1; mode=block

## Cost Estimation

### Vercel Free Tier
- ✅ 100GB bandwidth/month
- ✅ Unlimited personal projects
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Custom domains

### When to Upgrade
- High traffic (>100GB/month)
- Team collaboration needs
- Advanced analytics
- Higher performance requirements

## Next Steps

1. **Custom Domain**: Add your own domain for branding
2. **Analytics**: Set up Google Analytics or similar
3. **Monitoring**: Configure uptime monitoring
4. **SSL**: Automatic HTTPS included
5. **CDN**: Global content delivery

## Support

If you encounter issues:

1. **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
2. **Project Issues**: Create GitHub issue
3. **Community**: Vercel Discord community

---

🎉 **Congratulations!** Your ChatGPT Atlas website is now live on Vercel!

**Live URL**: https://your-project-name.vercel.app

The website is now:
- ✅ Globally distributed via CDN
- ✅ Automatically deployed on every push
- ✅ Secured with HTTPS
- ✅ Optimized for performance
- ✅ Monitoring enabled

Happy deploying! 🚀
# 🚀 How to Get Your Deployment URL & Update It

## Step 1: Deploy Your App

You have 3 options:

### Option A: Deploy to Vercel (Recommended - Free & Easy)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "NFT mint app"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Sign up/login (free)
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Wait 1-2 minutes

3. **Get Your URL:**
   - After deployment, Vercel will show you a URL like:
   - `https://your-project-name.vercel.app`
   - This is your deployment URL! ✅

---

### Option B: Deploy to Netlify (Free & Easy)

1. **Build your app:**
   ```bash
   pnpm build
   ```

2. **Deploy on Netlify:**
   - Go to https://www.netlify.com
   - Sign up/login (free)
   - Drag and drop your `dist/` folder
   - Or use Netlify CLI:
     ```bash
     npx netlify deploy --prod
     ```

3. **Get Your URL:**
   - Netlify will give you a URL like:
   - `https://random-name-12345.netlify.app`
   - This is your deployment URL! ✅

---

### Option C: Deploy on Replit (If using Replit)

1. **If you're already on Replit:**
   - Your `.replit` file is already configured
   - Click the "Deploy" or "Run" button
   - Or go to "Deployments" tab

2. **Get Your URL:**
   - Replit will give you a URL like:
   - `https://your-project-name.replit.app`
   - This is your deployment URL! ✅

---

## Step 2: Update the URL in Your Config

Once you have your deployment URL, update `src/config.ts`:

### Current Code (Line 97):
```typescript
url: "http://localhost:5173/", // Update with your deployment URL when ready
```

### Update It To:
```typescript
url: "https://your-project-name.vercel.app/", // Your actual deployment URL
```

**Example updates:**

If you deployed to Vercel:
```typescript
url: "https://farcasterbasenft.vercel.app/",
```

If you deployed to Netlify:
```typescript
url: "https://awesome-nft-mint.netlify.app/",
```

If you deployed to Replit:
```typescript
url: "https://my-nft-app.replit.app/",
```

---

## Step 3: Rebuild & Redeploy (Important!)

After updating the URL in `src/config.ts`:

1. **Rebuild your app:**
   ```bash
   pnpm build
   ```

2. **Redeploy:**
   - **Vercel**: Push to GitHub again (auto-deploys)
   - **Netlify**: Drag & drop `dist/` folder again
   - **Replit**: Click Deploy again

---

## Quick Checklist

- [ ] Deploy app to hosting service
- [ ] Get deployment URL (e.g., `https://yourapp.com`)
- [ ] Update `src/config.ts` line 97 with your URL
- [ ] Rebuild: `pnpm build`
- [ ] Redeploy with new URL
- [ ] Test the deployed app in browser
- [ ] Test in Farcaster app

---

## Example: Complete Update

**Before:**
```typescript
url: "http://localhost:5173/",
```

**After deploying to Vercel:**
```typescript
url: "https://farcasterbasenft.vercel.app/",
```

**Then rebuild:**
```bash
pnpm build
```

**Then push to GitHub (if using Vercel):**
```bash
git add src/config.ts
git commit -m "Update deployment URL"
git push
```

Vercel will automatically redeploy with the new URL! 🎉

---

## Testing Your Deployment

After updating, test your URL:

1. **Open in browser:**
   - Visit your deployment URL
   - Check if the app loads correctly
   - Verify NFT image displays

2. **Test in Farcaster:**
   - Create a cast with your frame button
   - Click the button - it should open your deployed app

---

## Troubleshooting

**If your URL doesn't work:**
- Make sure you added `/` at the end: `https://yourapp.com/` (not `https://yourapp.com`)
- Check that you rebuilt after updating the config
- Verify the deployment is live (check hosting dashboard)

**If images don't load:**
- Your IPFS image should work fine
- Make sure URLs use `https://` not `http://`

---

## Your Current Config Location

**File:** `src/config.ts`
**Line:** 97
**Current value:** `"http://localhost:5173/"`
**Need to change to:** Your deployment URL

Once you deploy, you'll have a real URL to replace this with! 🚀


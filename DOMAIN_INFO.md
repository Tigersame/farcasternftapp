# 🌐 Your Domain Information

## Current Domain (Active)

**Your NFT mint app is currently using:**

🔗 **https://farcasternftapp.vercel.app/**

This is your **Vercel-provided domain** and is:
- ✅ Active and working
- ✅ HTTPS enabled
- ✅ Ready to use in Farcaster
- ✅ All configurations point to this domain

---

## Where It's Configured

### 1. Main Config (`src/config.ts`)
```typescript
url: "https://farcasternftapp.vercel.app/"
```

### 2. Farcaster Config (`public/.well-known/farcaster.json`)
```json
{
  "frame": {
    "homeUrl": "https://farcasternftapp.vercel.app/",
    "iconUrl": "https://farcasternftapp.vercel.app/icon.png",
    ...
  }
}
```

### 3. Share Component (`src/components/app/mintSuccessSheet.tsx`)
```typescript
embeds: ["https://farcasternftapp.vercel.app/"]
```

---

## Custom Domain (Optional)

If you want to use your own custom domain (e.g., `nft.yourdomain.com`):

1. **Add it to Vercel:**
   - Go to: https://vercel.com/dashboard
   - Select your project
   - Settings → Domains → Add Domain
   - Follow DNS setup instructions

2. **Tell me your domain** and I'll update all the files

---

## How to Find Your Domain

### Option 1: Check Vercel Dashboard
- Visit: https://vercel.com/dashboard
- Select your `farcasternftapp` project
- Check **Settings** → **Domains**
- You'll see:
  - Default: `farcasternftapp.vercel.app`
  - Custom domains (if any added)

### Option 2: Your Current Live URL
Your app is live at:
**https://farcasternftapp.vercel.app/**

This is your current domain.

---

## Summary

- **Current Domain:** `farcasternftapp.vercel.app`
- **Status:** ✅ Active and working
- **Custom Domain:** Not set (optional - you can add one later)

**Your app works perfectly with the current Vercel domain!**


# 🌐 Custom Domain Setup Guide

## Step 1: Add Custom Domain to Vercel

1. **Go to Vercel Dashboard:**
   - Visit: https://vercel.com/dashboard
   - Select your project: `farcasternftapp`

2. **Add Domain:**
   - Go to **Settings** → **Domains**
   - Click **Add Domain**
   - Enter your custom domain (e.g., `nft.yourdomain.com`)
   - Follow Vercel's instructions to verify ownership

3. **Configure DNS:**
   - Add DNS records as Vercel instructs:
     - **A Record** or **CNAME** pointing to Vercel
   - Wait for DNS propagation (can take a few minutes to 48 hours)

---

## Step 2: Update Your Code

Once your domain is set up on Vercel, update these files:

### Files to Update:

1. **`src/config.ts`** (Line 97)
   ```typescript
   url: "https://your-custom-domain.com/",
   ```

2. **`public/.well-known/farcaster.json`**
   - Update all URLs to your custom domain

3. **`src/components/app/mintSuccessSheet.tsx`** (Line 24)
   - Update embed URL

---

## Step 3: Regenerate Farcaster Account Association

For the `.well-known/farcaster.json` file, you'll need to:

1. **Get Farcaster Account Association:**
   - Use Farcaster's domain verification tools
   - Generate new signature for your custom domain
   - Update the `accountAssociation` section

2. **Tools to use:**
   - Farcaster developer docs
   - Frame builder tools
   - Or contact Farcaster support

---

## Step 4: Rebuild and Deploy

```bash
pnpm build
git add .
git commit -m "Update to custom domain"
git push
```

---

## Example: If Your Domain is `nft.example.com`

**Update `src/config.ts`:**
```typescript
url: "https://nft.example.com/",
```

**Update `public/.well-known/farcaster.json`:**
```json
{
  "accountAssociation": {
    "payload": "eyJkb21haW4iOiJuZnQuZXhhbXBsZS5jb20ifQ==",
    ...
  },
  "frame": {
    "homeUrl": "https://nft.example.com/",
    "iconUrl": "https://nft.example.com/icon.png",
    ...
  }
}
```

---

## ⚠️ Important Notes

1. **DNS Propagation:** Can take 24-48 hours
2. **HTTPS:** Vercel automatically provides SSL certificates
3. **Farcaster Verification:** May need new domain verification
4. **Test First:** Test on Vercel subdomain before switching

---

## Current Domain References

The following files contain domain references that need updating:
- ✅ `src/config.ts` - Main deployment URL
- ✅ `public/.well-known/farcaster.json` - Frame configuration
- ✅ `src/components/app/mintSuccessSheet.tsx` - Share embed

---

**Please provide your custom domain and I'll update all the files for you!**


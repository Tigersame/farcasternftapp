# 🚀 Next Steps for Your NFT Mint App

## ✅ What's Done
- ✅ App structure and components
- ✅ 5 custom NFT images created
- ✅ pnpm installed and dependencies configured
- ✅ Development server ready

---

## 📋 Step-by-Step Checklist

### 1. **Test Your App Locally** (5 minutes)

```bash
# Make sure dev server is running
pnpm dev
```

- Open http://localhost:5173 in your browser
- Check that NFT images display correctly
- Test the UI components

---

### 2. **Customize Your Configuration** (10 minutes)

Edit `src/config.ts`:

#### A. Update Creator Information
```typescript
creator: {
  name: "yourname.eth",        // ← Your ENS or username
  fid: 12345,                    // ← Your Farcaster ID
  profileImageUrl: "/icon.png",  // ← Your profile image
},
```

**How to find your Farcaster ID (fid):**
- Go to https://warpcast.com
- Open your profile
- The fid is in your profile URL or settings

#### B. Update NFT Details
```typescript
name: "Your Collection Name",    // ← Your NFT collection name
description: "Your description",  // ← What makes it special
priceEth: "0.001",                // ← Mint price in ETH
```

#### C. Choose Your NFT Image
```typescript
imageUrl: "/nft-main.svg",  // Options: nft-1.svg, nft-2.svg, nft-3.svg, nft-4.svg
```

---

### 3. **Configure Your Smart Contract** (Important!)

Your app uses this contract configuration:
```typescript
contractConfig = {
  address: "0x8087039152c472Fa74F47398628fF002994056EA",
  vectorId: 6506,
  // ...
}
```

**For your own contract:**
1. Deploy an NFT contract on Base
2. Update `contractConfig.address` with your contract address
3. Update `contractConfig.vectorId` (if using Zora/Manifold)
4. Update `contractConfig.abi` with your contract's ABI

**For testing (use existing demo contract):**
- The current contract is a demo - you can test with it
- Replace with your own contract before production

---

### 4. **Prepare for Production** (15 minutes)

#### A. Host Your NFT Images

**Option 1: Use IPFS (Recommended)**
1. Go to https://www.pinata.cloud/
2. Sign up and upload your NFT images
3. Copy the IPFS hash
4. Update config:
   ```typescript
   imageUrl: "https://gateway.pinata.cloud/ipfs/YOUR_HASH"
   ```

**Option 2: Use Your Deployment**
- If deploying to Vercel/Netlify, images in `public/` will be served
- Use: `imageUrl: "https://your-domain.com/nft-main.svg"`

#### B. Update Deployment URL

In `src/config.ts`:
```typescript
embedConfig.button.action.url = "https://your-deployed-app.com/"
```

---

### 5. **Deploy Your App**

#### Option A: Deploy to Vercel (Easiest)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Import your GitHub repository
   - Deploy automatically
   - Get your deployment URL

3. **Update config with Vercel URL**

#### Option B: Deploy to Netlify

1. Build your app:
   ```bash
   pnpm build
   ```

2. Deploy `dist/` folder to Netlify:
   - Drag & drop or use Netlify CLI
   - Get your deployment URL

#### Option C: Deploy to Replit (If using Replit)

- Your `.replit` file is already configured
- Click "Run" or use the Deploy button
- Get your Replit URL

---

### 6. **Test in Farcaster** (Important!)

1. **Create a Frame Cast:**
   - Post a cast on Farcaster
   - Add your app URL as a button

2. **Test the Mini App:**
   - Click your frame button
   - Test wallet connection
   - Test minting (use testnet first!)

3. **Verify:**
   - ✅ Images load correctly
   - ✅ Wallet connects
   - ✅ Minting works
   - ✅ Success/error handling works

---

### 7. **Production Checklist**

Before going live:

- [ ] Updated creator information (name, fid, profile image)
- [ ] Updated NFT metadata (name, description, price)
- [ ] Contract address updated (your own contract)
- [ ] NFT images hosted (IPFS or CDN)
- [ ] Deployment URL updated in config
- [ ] Tested wallet connection
- [ ] Tested minting flow
- [ ] Tested on mobile device
- [ ] Frame meta tag correctly injected (check HTML source)

---

## 🛠️ Useful Commands

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm preview          # Preview production build
pnpm lint             # Check code quality

# Testing URLs
# Test your image URLs in browser before deploying
```

---

## 📚 Additional Resources

- **Farcaster Frame Docs**: https://docs.farcaster.xyz/reference/frames
- **Wagmi Docs**: https://wagmi.sh
- **Base Network**: https://base.org
- **IPFS Hosting**: https://pinata.cloud

---

## 🆘 Need Help?

### Common Issues:

1. **Images not loading:**
   - Check image paths are correct
   - Verify images exist in `public/` folder
   - Use HTTPS URLs in production

2. **Wallet not connecting:**
   - Make sure you're in Farcaster app
   - Check wagmi config is correct
   - Verify Base chain is configured

3. **Minting fails:**
   - Check contract address is correct
   - Verify you have enough ETH
   - Check contract ABI matches

---

## 🎯 Quick Start (Copy & Paste)

If you want to quickly customize:

1. **Update `src/config.ts`:**
   ```typescript
   name: "My Awesome NFT Collection",
   imageUrl: "/nft-main.svg",  // or nft-1.svg, nft-2.svg, etc.
   creator: {
     name: "yourname.eth",
     fid: YOUR_FID_HERE,
   },
   priceEth: "0.001",
   ```

2. **Deploy:**
   ```bash
   pnpm build
   # Upload dist/ folder to your hosting
   ```

3. **Update deployment URL in config**

4. **Test in Farcaster!**

---

**You're all set! 🎉**

Your NFT mint app is ready. Start with testing locally, then customize, and deploy when ready!


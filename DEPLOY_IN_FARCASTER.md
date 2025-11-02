# 📱 How to Deploy/Use Your App in Farcaster

## Understanding Farcaster Frames

Your app is **already deployed** at: https://farcasternftapp.vercel.app/

To use it in Farcaster, you need to **create a Frame cast** that links to your app. Farcaster will automatically detect it as a frame.

---

## Step-by-Step: Create Your Farcaster Frame Cast

### Method 1: Using Warpcast (Recommended)

#### Option A: Direct Frame Cast

1. **Go to Warpcast:**
   - Visit: https://warpcast.com
   - Sign in with your Farcaster account

2. **Create a New Cast:**
   - Click the "Cast" or compose button
   - Write your cast text

3. **Add Your Frame URL:**
   - In the cast, add this URL:
   ```
   https://farcasternftapp.vercel.app/
   ```
   - Farcaster will automatically detect it as a frame
   - Or look for "Add Frame" / "Frame" option in the compose interface

4. **Post Your Cast:**
   - Click "Cast" or "Post"
   - Your frame will appear as a clickable button in the cast

---

#### Option B: Using Frame Meta Tags (Already Configured!)

Your app already has the frame meta tag configured. Farcaster will detect it automatically.

**To use it:**
1. Post a cast with your URL: `https://farcasternftapp.vercel.app/`
2. Farcaster will read the meta tag and show it as a frame
3. Users can click the button to open your mini app

---

### Method 2: Using Aegir (Frame Builder)

If you want more control over the frame appearance:

1. **Go to Aegir:**
   - Visit: https://aegir.so or similar frame builder tools

2. **Create Your Frame:**
   - Frame URL: `https://farcasternftapp.vercel.app/`
   - Button text: "Mint NFT" or "Collect"
   - Image: Your NFT image URL

3. **Generate Frame:**
   - Aegir will generate a frame link
   - Post that link in your Farcaster cast

---

### Method 3: Using Frame Protocol Directly

Your app already implements the Frame protocol correctly. Just post the URL:

```
https://farcasternftapp.vercel.app/
```

Farcaster will automatically:
- Read the `<meta name="fc:frame">` tag from your HTML
- Display it as a frame with a button
- Open your mini app when clicked

---

## 📋 Example Cast Template

**Copy this and post it in Warpcast:**

```
🚀 Introducing: farcasterbasenft NFT Collection

Mint your exclusive NFT on Base for 0.0004 ETH!

Features:
✨ Exclusive artwork hosted on IPFS
🔗 On-chain on Base network
🎨 Created by @meenas

Frame URL: https://farcasternftapp.vercel.app/

👇 Click the button to mint!
```

Or simply post:
```
Check out my new NFT collection: https://farcasternftapp.vercel.app/
```

Farcaster will automatically detect it as a frame!

---

## ✅ How Farcaster Detects Your Frame

Your app has this meta tag (automatically injected):

```html
<meta name="fc:frame" content='{"version":"next","imageUrl":"...","button":{"title":"Mint","action":{"type":"launch_frame","name":"NFT Mint","url":"https://farcasternftapp.vercel.app/"}}}'>
```

When Farcaster sees a URL in a cast:
1. It checks if the URL has frame meta tags
2. If yes, it displays it as a frame
3. Shows your button with the configured text
4. Opens your mini app when clicked

---

## 🎯 Quick Steps Summary

1. **Your app is already deployed:** https://farcasternftapp.vercel.app/ ✅
2. **Go to Warpcast:** https://warpcast.com
3. **Create a cast** with your URL
4. **Post it** - Farcaster will auto-detect the frame
5. **Test:** Click your own frame button to verify

---

## 🔍 Verify Your Frame Works

After posting, check:

1. **Frame appears:** Does the frame button show in your cast?
2. **Button clickable:** Can you click the button?
3. **App opens:** Does it open your NFT mint app?
4. **Everything works:** Does the UI load correctly?

---

## 📱 Using Frame in Warpcast Mobile App

1. **Open Warpcast app** on your phone
2. **Tap compose** button (+ icon)
3. **Type your cast** with the URL:
   ```
   https://farcasternftapp.vercel.app/
   ```
4. **Post** - Frame will appear automatically

---

## 🎨 Your Frame Configuration

**Current Frame Setup:**
- **Image:** IPFS hosted NFT image
- **Button Text:** "Mint"
- **Action:** Launch Frame
- **URL:** https://farcasternftapp.vercel.app/
- **Name:** NFT Mint

This is already configured in your `src/config.ts` and automatically injected into your HTML!

---

## ✅ Your App is Ready!

**No additional deployment needed!** 

Your app on Vercel already:
- ✅ Has frame meta tags
- ✅ Is HTTPS enabled
- ✅ Implements Frame protocol
- ✅ Ready for Farcaster

**Just post the URL in Farcaster and it will work!**

---

## 🚀 Action Items

1. **Go to Warpcast:** https://warpcast.com
2. **Post a cast** with: `https://farcasternftapp.vercel.app/`
3. **Wait a few seconds** - Frame should appear
4. **Test it** - Click your own frame button
5. **Share it** with the community!

---

## 💡 Tips

- **Frame appears automatically** - No special setup needed
- **Just post the URL** - Farcaster detects frames automatically
- **Works on mobile too** - Frame buttons work in Warpcast mobile app
- **Share your cast** - Others will see and can interact with your frame

---

**Your app is deployed and ready. Just post the URL in Farcaster! 🎉**


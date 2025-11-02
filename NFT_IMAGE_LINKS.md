# 🔗 NFT Image Links

## Local Development URLs (Currently Available)

Since your dev server is running at `http://localhost:5173`, you can access all NFT images here:

### Main NFT Images:
1. **Main Design**: http://localhost:5173/nft-main.svg
2. **NFT #1**: http://localhost:5173/nft-1.svg
3. **NFT #2**: http://localhost:5173/nft-2.svg
4. **NFT #3**: http://localhost:5173/nft-3.svg
5. **NFT #4**: http://localhost:5173/nft-4.svg
6. **NFT #5**: http://localhost:5173/nft-5.svg
7. **NFT #6**: http://localhost:5173/nft-6.svg
8. **NFT #7**: http://localhost:5173/nft-7.svg
9. **NFT #8**: http://localhost:5173/nft-8.svg
10. **NFT #9**: http://localhost:5173/nft-9.svg
11. **NFT #10**: http://localhost:5173/nft-10.svg
12. **Original PNG**: http://localhost:5173/nft.png

### Other Assets:
- **Icon**: http://localhost:5173/icon.png
- **Base Logo**: http://localhost:5173/base-logo.png

---

## Current Configuration

Your app is currently using:
- **Active NFT Image**: `/nft-main.svg`
- **Config File**: `src/config.ts` (line 12)

---

## How to Change NFT Image

To use a different NFT image, update `src/config.ts` line 12:

```typescript
imageUrl: "/nft-1.svg",  // Change to any: nft-2.svg, nft-3.svg, etc.
```

---

## Production URLs

After you deploy your app, the URLs will be:

```
https://your-domain.com/nft-main.svg
https://your-domain.com/nft-1.svg
https://your-domain.com/nft-2.svg
... etc
```

---

## Quick Access

**Test in Browser:**
- Open any of the URLs above in your browser
- You should see the NFT image displayed

**View All Images:**
- Go to: http://localhost:5173/
- The app will show the currently configured NFT image

---

## Files Location

All NFT images are stored in:
```
public/
  ├── nft-main.svg
  ├── nft-1.svg
  ├── nft-2.svg
  ├── ... (all 12 images)
```

These files are automatically served by Vite when you run `pnpm dev` or deploy your app.


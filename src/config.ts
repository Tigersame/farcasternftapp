import type { Abi, Address } from "viem";
import { base } from "viem/chains";

/**
 * NFT Metadata Configuration
 */
export const mintMetadata = {
  name: "farcasterbasenft", // NFT Collection Name
  description:
    "An exclusive NFT collection on Base. Mint your unique digital artwork directly through Farcaster.", // ← Update with your collection description
  // You can choose from: /nft-main.svg, /nft-1.svg through /nft-10.svg, or /nft.png
  imageUrl: "https://gateway.pinata.cloud/ipfs/bafkreih4uxlnupyc5vwmgyoumylfsrzh42s7ji6fjvtsnnyvsrsewek4tm",
  creator: {
    name: "meenas", // Creator name
    fid: 639734, // Farcaster ID
    profileImageUrl: "/icon.png", // ← Update with your profile image URL
    walletAddress: "0xeafe5088bcd7eb27fa1e4aa417a55ed5ea2dab8b" as Address, // Creator wallet address
  },
  chain: "Base",
  priceEth: "0.0004", // ← Update with your mint price in ETH (e.g., "0.001", "0.01")
  startsAt: null,
  endsAt: null,
  isMinting: true,
  minSupply: 1, // Minimum supply required for the collection
  maxSupply: null, // Maximum supply (null for unlimited)
} as const;

/**
 * Contract Configuration
 */
export const contractConfig = {
  address: "0x8087039152c472Fa74F47398628fF002994056EA" as Address,
  chain: base,
  abi: [
    { inputs: [], name: "MintPaused", type: "error" },
    { inputs: [], name: "InvalidPaymentAmount", type: "error" },
    { inputs: [], name: "SenderNotDirectEOA", type: "error" },
    {
      inputs: [
        { internalType: "uint256", name: "vectorId", type: "uint256" },
        { internalType: "uint48", name: "numTokensToMint", type: "uint48" },
        { internalType: "address", name: "mintRecipient", type: "address" },
      ],
      name: "vectorMint721",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "vectorId",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "contractAddress",
          type: "address",
        },
        {
          indexed: true,
          internalType: "bool",
          name: "onChainVector",
          type: "bool",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "numMinted",
          type: "uint256",
        },
      ],
      name: "NumTokenMint",
      type: "event",
    },
  ] as const as Abi,
  vectorId: 6506,
  referrer: "0xac2180ED4a229134A9e753E26CAaF101D9A4cb06" as Address, // Referrer/owner wallet address
} as const;

/**
 * Farcaster Frame Embed Configuration
 */
export const embedConfig = {
  version: "next",
  // Frame preview image - can be same as NFT or a different preview
  imageUrl: "https://gateway.pinata.cloud/ipfs/bafkreih4uxlnupyc5vwmgyoumylfsrzh42s7ji6fjvtsnnyvsrsewek4tm",
  button: {
    title: "Mint",
    action: {
      type: "launch_frame",
      name: "NFT Mint",
      url: "https://farcasternftapp.vercel.app/", // Deployment URL
    },
  },
} as const;

/**
 * Main App Configuration
 */
export const config = {
  ...mintMetadata,
  contract: contractConfig,
  embed: embedConfig,
} as const;

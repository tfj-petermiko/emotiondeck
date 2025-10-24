export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck PRO — Phase 1: Dark Spectrum I",
  description:
    "Discover the hidden side of human emotion with EmotionDeck PRO Phase 1: Dark Spectrum I — 48 black-and-white portraits exploring deception, restraint, inner conflict, power, and redemption.",
  keywords:
    "EmotionDeck PRO, Dark Spectrum I, emotional depth, deception masks, hidden states, inner conflict, pain and loss, power and control, reflection and redemption, emotional research, psychology, AI emotional portraits",
  alternates: {
    canonical: "https://emotiondeck.com/pro/phase-1",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "android-chrome", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome", url: "/android-chrome-512x512.png" },
    ],
  },
  openGraph: {
    title: "EmotionDeck PRO — Phase 1: Dark Spectrum I",
    description:
      "Explore the hidden spectrum of human emotion — deception, restraint, pain, power, and redemption — in the EmotionDeck PRO Phase 1: Dark Spectrum I Collection.",
    url: "https://emotiondeck.com/pro/phase-1",
    siteName: "EmotionDeck",
    type: "website",
    images: [
      {
        url: "https://emotiondeck.com/private_images/meta/darkspectrum_phase1_preview.webp",
        width: 1200,
        height: 630,
        alt: "EmotionDeck PRO Phase 1 — Dark Spectrum I Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck PRO — Phase 1: Dark Spectrum I",
    description:
      "EmotionDeck PRO Phase 1 — Dark Spectrum I reveals 48 portraits showing deception, restraint, inner conflict, power, and redemption. A deep exploration of emotion beyond the visible surface.",
    images: [
      "https://emotiondeck.com/private_images/meta/darkspectrum_phase1_preview.webp",
    ],
  },
};

export default function Phase1Layout({ children }) {
  return <>{children}</>;
}

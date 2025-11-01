export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck PRO Phase 2 - Dark Spectrum II",
  description:
    "Explore the depths of human emotion with EmotionDeck PRO Phase 2 (Dark Spectrum II) - 48 monochrome portraits revealing despair, decay, vengeance, isolation, and fragile rebirth.",
  keywords:
    "EmotionDeck PRO, Dark Spectrum II, emotional depth, despair, decay, vengeance, nihilism, grief, isolation, mourning, emotional exploration, psychology, AI emotion portraits, black-and-white emotional art",
  alternates: {
    canonical: "https://emotiondeck.com/pro/phase-2",
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
    title: "EmotionDeck PRO Phase 2 - Dark Spectrum II",
    description:
      "EmotionDeck PRO Phase 2 (Dark Spectrum II) unveils 48 emotional portraits exploring despair, vengeance, decay, and rebirth through a lens of raw human psychology.",
    url: "https://emotiondeck.com/pro/phase-2",
    siteName: "EmotionDeck",
    type: "website",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck PRO Phase 2 - Dark Spectrum II Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck PRO Phase 2 - Dark Spectrum II",
    description:
      "EmotionDeck PRO Phase 2 - Dark Spectrum II captures 48 monochrome emotions exploring despair, decay, isolation, vengeance, and the edge of renewal.",
    images: [
      "https://emotiondeck.com/preview.jpg",
    ],
  },
  // 🚫 Prevent indexing
  robots: {
    index: false,
    follow: false,
  },
};

export default function Phase2Layout({ children }) {
  return <>{children}</>;
}

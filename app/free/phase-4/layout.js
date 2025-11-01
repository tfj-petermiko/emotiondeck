export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Phase 4 - Children Collection",
  description:
    "Explore 84 portraits of children aged 6–7 expressing genuine emotions with EmotionDeck Phase 4 - designed for education, empathy training, and emotional development research.",
  keywords:
    "EmotionDeck Phase 4, Children Collection, child emotions, emotion recognition, emotional development, psychology education, empathy learning, early education, facial expressions, emotion research",
  alternates: {
    canonical: "https://emotiondeck.com/free/phase-4",
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
    title: "EmotionDeck Phase 4 - Children Collection",
    description:
      "Discover 84 expressive portraits of children aged 6–7 showcasing authentic emotions - EmotionDeck Phase 4 supports empathy and early emotional education.",
    url: "https://emotiondeck.com/free/phase-4",
    siteName: "EmotionDeck",
    type: "website",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck Phase 4 Children Collection Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Phase 4 - Children Collection",
    description:
      "EmotionDeck Phase 4 features 84 portraits of children aged 6–7 expressing core emotions - a resource for education, psychology, and empathy research.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
  // 🚫 Prevent indexing
  robots: {
    index: false,
    follow: false,
  },
};

export default function Phase4Layout({ children }) {
  return <>{children}</>;
}

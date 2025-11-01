export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Phase 1 - Free Basic Collection",
  description:
    "Explore 144 black-and-white portraits from the EmotionDeck Phase 1 Free Basic Collection - learn to recognise and understand core human emotions across cultures and expressions.",
  keywords:
    "EmotionDeck Phase 1, Free Basic Collection, foundational emotions, emotion recognition, facial expressions, psychology learning, emotional intelligence, empathy training, AI portraits, emotion study",
  alternates: {
    canonical: "https://emotiondeck.com/free/phase-1",
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
    title: "EmotionDeck Phase 1 - Free Basic Collection",
    description:
      "Discover 144 foundational emotional expressions across diverse faces and cultures - the starting point for exploring human emotion with EmotionDeck.",
    url: "https://emotiondeck.com/free/phase-1",
    siteName: "EmotionDeck",
    type: "website",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck Phase 1 Free Basic Collection Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Phase 1 - Free Basic Collection",
    description:
      "Learn to recognise and interpret 144 foundational emotions with the EmotionDeck Phase 1 Free Basic Collection - ideal for education, research, and personal growth.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
  // 🚫 Prevent indexing
  robots: {
    index: false,
    follow: false,
  },
};

export default function Phase1Layout({ children }) {
  return <>{children}</>;
}

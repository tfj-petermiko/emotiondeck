export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Learn & Grow - FACS Emotion Analyzer",
  description:
    "Discover how facial muscles reveal emotions in real time with EmotionDeck’s FACS Analyzer - learn the science of expressions, smiles, frowns, and microexpressions.",
  keywords:
    "EmotionDeck FACS analyzer, facial action coding system, emotion recognition, microexpressions, facial analysis, psychology education, AI emotion detection, emotion learning, facial expression science, emotional intelligence",
  alternates: {
    canonical: "https://emotiondeck.com/learn/facs-analyzer",
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
    title: "EmotionDeck Learn & Grow - FACS Emotion Analyzer",
    description:
      "Explore human emotion through the Facial Action Coding System - understand how subtle muscle movements create expressions with EmotionDeck Learn & Grow.",
    url: "https://emotiondeck.com/learn/facs-analyzer",
    siteName: "EmotionDeck",
    type: "website",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck FACS Emotion Analyzer Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Learn & Grow - FACS Emotion Analyzer",
    description:
      "Analyse facial expressions in real time with EmotionDeck’s FACS Analyzer - learn how emotions are formed and revealed through subtle facial movements.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },

  // 🚫 Prevent indexing
  robots: {
    index: true,
    follow: true,
  },
};

export default function LearnFacsLayout({ children }) {
  return <>{children}</>;
}

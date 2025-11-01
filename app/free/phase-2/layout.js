export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Phase 2 - Advanced Emotional Expressions",
  description:
    "Dive into EmotionDeck Phase 2 - explore complex emotions like Anxiety, Nostalgia, Confidence, and Tranquillity through realistic portraits across cultures and ages.",
  keywords:
    "EmotionDeck Phase 2, advanced emotional expressions, complex emotions, emotional intelligence, emotion recognition, psychology education, AI portraits, empathy training, human emotion study, cross-cultural emotion",
  alternates: {
    canonical: "https://emotiondeck.com/free/phase-2",
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
    title: "EmotionDeck Phase 2 - Advanced Emotional Expressions",
    description:
      "Discover subtle and complex human emotions with EmotionDeck Phase 2 - explore psychological depth through portraits of diverse people worldwide.",
    url: "https://emotiondeck.com/free/phase-2",
    siteName: "EmotionDeck",
    type: "website",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck Phase 2 Advanced Emotional Expressions Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Phase 2 - Advanced Emotional Expressions",
    description:
      "Explore complex emotional states in EmotionDeck Phase 2 - a visual study of human expression designed for researchers, educators, and advanced learners.",
    images: ["https://emotiondeck.com/preview.jpg"],
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

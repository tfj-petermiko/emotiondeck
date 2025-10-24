export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Phase 6 - Evolution Collection",
  description:
    "Experience EmotionDeck Phase 6: Evolution - a global visual journey of human emotion across cultures, ages, and genders, revealing unity and diversity through expressive portraits.",
  keywords:
    "EmotionDeck Phase 6, Evolution Collection, global emotions, emotional diversity, human feelings, emotion recognition, emotional intelligence, empathy training, psychology research, facial expression study",
  alternates: {
    canonical: "https://emotiondeck.com/free/phase-6",
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
    title: "EmotionDeck Phase 6 - Evolution Collection",
    description:
      "Discover EmotionDeck Phase 6: Evolution - a panoramic study of emotional expression across age, gender, and culture. Explore the shared humanity in every portrait.",
    url: "https://emotiondeck.com/free/phase-6",
    siteName: "EmotionDeck",
    type: "website",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck Phase 6 Evolution Collection Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Phase 6 - Evolution Collection",
    description:
      "EmotionDeck Phase 6: Evolution explores how emotions evolve across culture, age, and gender - over 300 portraits capturing the shared depth of human feeling.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function Phase6Layout({ children }) {
  return <>{children}</>;
}

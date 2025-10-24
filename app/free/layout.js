export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Free Collection - Explore Foundational Emotions",
  description:
    "Discover the EmotionDeck Free Collection - explore 144 foundational human emotions through expressive portraits across ages, genders, and cultures. Start your emotional learning journey today.",
  keywords:
    "EmotionDeck Free Collection, basic emotions, emotion recognition, emotional intelligence, facial expressions, emotion learning, psychology education, AI portraits, empathy training, human emotion dataset",
  alternates: {
    canonical: "https://emotiondeck.com/free",
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
    title: "EmotionDeck Free Collection - Explore Foundational Emotions",
    description:
      "Explore the EmotionDeck Free Collection - a visual journey through 144 core emotions representing human diversity, ideal for learning and emotional awareness.",
    url: "https://emotiondeck.com/free",
    siteName: "EmotionDeck",
    type: "website",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck Free Collection Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Free Collection - Explore Foundational Emotions",
    description:
      "Start your journey with the EmotionDeck Free Collection - explore 144 foundational emotions across cultures, ages, and expressions.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function FreeLayout({ children }) {
  return <>{children}</>;
}

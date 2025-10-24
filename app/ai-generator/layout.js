export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck AI Generator - Create Custom Emotional Portraits",
  description:
    "Use the EmotionDeck AI Generator to instantly create realistic emotional portraits that combine human emotion, cultural diversity, age, and gender for research, education, and creative projects.",
  keywords:
    "EmotionDeck AI Generator, emotional portraits, AI face generation, emotion synthesis, psychology tools, emotion recognition, creative AI, research datasets, emotion training, cultural diversity, human expression",
  alternates: {
    canonical: "https://emotiondeck.com/ai-generator",
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
    title: "EmotionDeck AI Generator - Create Custom Emotional Portraits",
    description:
      "Generate expressive emotional portraits using advanced AI - explore human emotion across cultures, ages, and identities for education and research.",
    url: "https://emotiondeck.com/ai-generator",
    siteName: "EmotionDeck",
    type: "website",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck AI Generator Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck AI Generator - Create Custom Emotional Portraits",
    description:
      "Explore the EmotionDeck AI Generator - design emotional portraits across emotions, cultures, and age groups with precision and realism.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function GeneratorLayout({ children }) {
  return <>{children}</>;
}

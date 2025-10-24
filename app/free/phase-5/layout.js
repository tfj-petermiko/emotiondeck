export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Phase 5 - Seniors Collection",
  description:
    "Discover 300 expressive portraits of seniors with EmotionDeck Phase 5 - explore emotional wisdom, resilience, and calmness across generations through authentic human expression.",
  keywords:
    "EmotionDeck Phase 5, Seniors Collection, senior emotions, emotional wisdom, cross-generational empathy, emotional intelligence, psychology research, emotion recognition, facial expressions, empathy training",
  alternates: {
    canonical: "https://emotiondeck.com/free/phase-5",
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
    title: "EmotionDeck Phase 5 - Seniors Collection",
    description:
      "Explore 300 portraits of seniors expressing emotional wisdom, calmness, and resilience - EmotionDeck Phase 5 celebrates the depth of human experience through age and emotion.",
    url: "https://emotiondeck.com/free/phase-5",
    siteName: "EmotionDeck",
    type: "website",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck Phase 5 Seniors Collection Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Phase 5 - Seniors Collection",
    description:
      "EmotionDeck Phase 5 presents 300 portraits of seniors expressing wisdom, serenity, and emotional strength - a visual study in empathy and human understanding.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function Phase5Layout({ children }) {
  return <>{children}</>;
}

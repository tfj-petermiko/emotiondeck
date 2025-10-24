export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Global Map — One World, Many Emotions",
  description:
    "Explore the interactive EmotionDeck Global Map — discover how cultures express and perceive human emotion, connecting people through shared emotional understanding worldwide.",
  keywords:
    "EmotionDeck Global Map, emotional atlas, cultural emotions, human emotion across countries, world empathy, emotional diversity, cross-cultural psychology, emotion research, visual learning, emotion perception",
  alternates: {
    canonical: "https://emotiondeck.com/globalmap",
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
    title: "EmotionDeck Global Map — One World, Many Emotions",
    description:
      "Discover emotional connections and cultural expression with the interactive EmotionDeck Global Map — explore how humanity shares emotion across borders.",
    url: "https://emotiondeck.com/globalmap",
    siteName: "EmotionDeck",
    type: "website",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck Global Map Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Global Map — One World, Many Emotions",
    description:
      "Explore EmotionDeck’s Global Map — a visual atlas showing how emotion, culture, and empathy connect people across the world.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function GlobalMapLayout({ children }) {
  return <>{children}</>;
}

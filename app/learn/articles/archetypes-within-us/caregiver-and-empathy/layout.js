export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - The Caregiver and The Heart of Empathy",
  description:
    "Discover how compassion and emotional awareness restore balance within the self and others. Explore Jungian insights into empathy and healing.",
  keywords:
    "Jungian psychology, empathy, compassion, emotional intelligence, healing, self awareness, archetypes, caregiving, emotional balance, humanity",
  alternates: {
    canonical: "https://emotiondeck.com/learn/articles/archetypes-within-us/caregiver-and-empathy"
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "android-chrome", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome", url: "/android-chrome-512x512.png" }
    ]
  },
  openGraph: {
    title: "EmotionDeck - The Caregiver and The Heart of Empathy",
    description:
      "Explore how compassion bridges emotional distance and restores balance. Learn Jungian psychology of empathy and healing.",
    url: "https://emotiondeck.com/learn/articles/archetypes-within-us/caregiver-and-empathy",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - The Caregiver and The Heart of Empathy"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - The Caregiver and The Heart of Empathy",
    description:
      "Discover Jungian reflections on compassion, awareness and healing through the Caregiver archetype.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}

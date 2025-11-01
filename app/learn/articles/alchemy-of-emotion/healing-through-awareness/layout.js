export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - Healing Through Awareness",
  description:
    "Explore how Jungian awareness transforms emotion into understanding. Learn how reflection and compassion integrate the shadow and restore balance within the self.",
  keywords:
    "Jungian psychology, emotional healing, self awareness, shadow integration, emotional intelligence, empathy, mindfulness, self reflection, individuation, personal growth, consciousness, inner peace, emotional transformation",
  alternates: {
    canonical:
      "https://emotiondeck.com/learn/articles/alchemy-of-emotion/healing-through-awareness"
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
    title: "EmotionDeck - Healing Through Awareness",
    description:
      "Discover how Jungian reflection turns emotion into wisdom and integrates shadow with consciousness. Learn how awareness brings balance and peace.",
    url: "https://emotiondeck.com/learn/articles/alchemy-of-emotion/healing-through-awareness",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - Healing Through Awareness Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - Healing Through Awareness",
    description:
      "Learn how awareness and Jungian reflection transform emotion into wisdom. Explore how integration of shadow restores emotional harmony and understanding.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}

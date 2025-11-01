export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - The Shadow and Integration",
  description:
    "Explore Jung’s concept of the shadow and emotional integration. Learn how accepting hidden emotions leads to balance and psychological wholeness.",
  keywords:
    "Jungian psychology, shadow, integration, emotional healing, self awareness, transformation, acceptance, unconscious, depth psychology, psyche, balance, individuation, personal growth, emotional intelligence",
  alternates: {
    canonical: "https://emotiondeck.com/learn/articles/shadow-and-integration"
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
    title: "EmotionDeck - The Shadow and Integration",
    description:
      "Discover how facing the shadow transforms emotion into understanding. Learn to integrate fear, anger and desire into psychological balance.",
    url: "https://emotiondeck.com/learn/articles/shadow-and-integration",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - Shadow and Integration Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - The Shadow and Integration",
    description:
      "Explore the psychology of the shadow and the path toward emotional wholeness. Learn how integration brings balance and authenticity.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}

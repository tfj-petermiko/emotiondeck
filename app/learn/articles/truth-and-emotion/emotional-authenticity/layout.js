export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - Emotional Authenticity",
  description:
    "Discover how expressing genuine emotion builds trust and connection. Learn how authenticity aligns emotion with truth through Jungian and Ekman insights.",
  keywords:
    "emotional authenticity, truth, empathy, self awareness, Jungian psychology, Ekman, honesty, communication, vulnerability, emotional intelligence, integrity, psychology, individuation, expression, self understanding",
  alternates: {
    canonical:
      "https://emotiondeck.com/learn/articles/truth-and-emotion/emotional-authenticity"
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
    title: "EmotionDeck - Emotional Authenticity",
    description:
      "Explore how genuine emotion creates trust, empathy and integrity. Learn how awareness transforms honesty into emotional strength.",
    url: "https://emotiondeck.com/learn/articles/truth-and-emotion/emotional-authenticity",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - Emotional Authenticity Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - Emotional Authenticity",
    description:
      "Learn how expressing emotion with honesty builds empathy and trust through Jungian reflection and emotional awareness.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}

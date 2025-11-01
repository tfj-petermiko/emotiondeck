export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - The Language of Dreams",
  description:
    "Explore how the unconscious speaks through emotion and symbol. Learn Jung’s view of dreams as messages of feeling, imagination and psychological growth.",
  keywords:
    "Jungian psychology, dreams, unconscious, emotion, symbolism, self awareness, emotional intelligence, collective unconscious, psyche, interpretation, transformation, imagination, inner growth",
  alternates: {
    canonical:
      "https://emotiondeck.com/learn/articles/emotional-self-in-dreams/language-of-dreams"
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
    title: "EmotionDeck - The Language of Dreams",
    description:
      "Discover how the unconscious mind expresses emotion through imagery. Explore Jung’s psychology of dreams and the symbols of feeling.",
    url: "https://emotiondeck.com/learn/articles/emotional-self-in-dreams/language-of-dreams",
    siteName: "EmotionDeck",
    type: "article",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - The Language of Dreams Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - The Language of Dreams",
    description:
      "Learn how the unconscious mind communicates through emotion and symbol. Explore Jungian insights into dream psychology and inner growth.",
    images: ["https://emotiondeck.com/preview.jpg"]
  }
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}

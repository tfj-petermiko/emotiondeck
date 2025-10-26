
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - United States",
  description: "United States’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s indelible soul and complex identity.",
  keywords: "EmotionDeck United States emotion, The Frontier Dreamer psychology, United States culture empathy, EmotionDeck identity United States, The Frontier Dreamer emotion psychology, empathy culture United States, emotion identity Frontier Dreamer, United States emotional journey, Frontier Dreamer cultural empathy, EmotionDeck psychology identity, United States empathetic culture, emotion psychology Frontier Dreamer",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/united-states",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - United States",
    description: "United States’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s indelible soul and complex identity.",
    url: "https://emotiondeck.com/encyclopedia/united-states",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "United States - The Frontier Dreamer | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — United States (The Frontier Dreamer)",
    description: "United States’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s indelible soul and complex identity.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function UnitedStatesLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Vatican City",
  description: "Vatican City’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Vatican City, The Spiritual Mirror spiritual journey, Vatican City culture and emotion, empathy in Vatican City, psychology of identity Vatican, EmotionDeck empathy exploration, Vatican City emotional insight, The Spiritual Mirror psychology, cultural identity Vatican City, EmotionDeck emotional culture, Vatican City empathy guide, psychology of Vatican identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/vatican-city",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Vatican City",
    description: "Vatican City’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/vatican-city",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Vatican City - The Spiritual Mirror | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Vatican City (The Spiritual Mirror)",
    description: "Vatican City’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function VaticanCityLayout({ children }) {
  return <>{children}</>;
}

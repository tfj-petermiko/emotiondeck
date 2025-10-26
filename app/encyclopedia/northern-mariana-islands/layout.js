
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Northern Mariana Islands",
  description: "Northern Mariana Islands’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection." collective soul with the dawn of new emotional horizons.",
  keywords: "EmotionDeck Northern Mariana Islands, The Voice of Dawn emotion, Northern Mariana Islands culture empathy, psychology of Northern Mariana Islands, EmotionDeck identity journey, The Voice of Dawn psychology, cultural emotion Northern Mariana Islands, empathy and identity EmotionDeck, Northern Mariana Islands emotional landscape, The Voice of Dawn cultural psyche, EmotionDeck empathy narratives, psychology and emotion Northern Mariana Islands",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/northern-mariana-islands",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Northern Mariana Islands",
    description: "Northern Mariana Islands’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection." collective soul with the dawn of new emotional horizons.",
    url: "https://emotiondeck.com/encyclopedia/northern-mariana-islands",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Northern Mariana Islands - The Voice of Dawn | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Northern Mariana Islands (The Voice of Dawn)",
    description: "Northern Mariana Islands’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection." collective soul with the dawn of new emotional horizons.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function NorthernMarianaIslandsLayout({ children }) {
  return <>{children}</>;
}

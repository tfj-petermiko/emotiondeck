
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Haiti",
  description: "Haiti’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "Haiti resilience, The Resilient Islander, Haitian endurance, emotional culture Haiti, Haitian psychology, national identity Haiti, Jungian archetypes Haiti, Haitian empathy, cultural symbolism Haiti, islander strength, Haitian spirit, symbolic resilience, emotional identity Haiti, Caribbean psychology, Haitian archetypes, poetic symbolism, Haitian emotional landscape",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/haiti",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Haiti",
    description: "Haiti’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/haiti",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Haiti - The Resilient Islander | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Haiti (The Resilient Islander)",
    description: "Haiti’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function HaitiLayout({ children }) {
  return <>{children}</>;
}

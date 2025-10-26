
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Argentina",
  description: "Argentina’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Argentina, The Keeper of Earth, Argentine roots, ancient wisdom, emotional culture, national identity, Jungian archetypes, cultural symbolism, empathy in Argentina, Argentine psyche, symbolic heritage, emotional resilience, South American culture, poetic symbolism, land and memory, emotional symbolism, Argentina emotional identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/argentina",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Argentina",
    description: "Argentina’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/argentina",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Argentina - The Keeper of Earth | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Argentina (The Keeper of Earth)",
    description: "Argentina’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ArgentinaLayout({ children }) {
  return <>{children}</>;
}

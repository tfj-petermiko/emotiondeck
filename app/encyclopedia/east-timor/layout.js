
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - East Timor",
  description: "East Timor’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck East Timor, The Keeper of Salt, Timorese resilience, ancient tides symbolism, emotional culture East Timor, Jungian archetypes, national identity, cultural empathy, symbolic guardianship, quiet strength, Timor psychology, emotional symbolism, collective memory, poetic national identity, cultural psyche, emotional heritage, island resilience",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/east-timor",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - East Timor",
    description: "East Timor’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/east-timor",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "East Timor - The Keeper of Salt | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — East Timor (The Keeper of Salt)",
    description: "East Timor’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function EastTimorLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Cuba",
  description: "Cuba’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Cuba, The Sacred Flame, Cuban resilience, passion beneath hardship, emotional culture Cuba, Cuban psychology, cultural empathy, Jungian archetypes Cuba, Cuban symbolism, national identity Cuba, Cuban emotional spirit, symbolism of flame, enduring Cuban spirit, poetic Cuban identity, Cuban cultural soul, emotional endurance Cuba, symbolic resilience, Cuban archetypes",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/cuba",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Cuba",
    description: "Cuba’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/cuba",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Cuba - The Sacred Flame | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Cuba (The Sacred Flame)",
    description: "Cuba’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function CubaLayout({ children }) {
  return <>{children}</>;
}

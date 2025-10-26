
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Burundi",
  description: "Burundi’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Burundi, The Mirror of Soil, ancestral earth, deep roots, emotional culture, national identity, Jungian archetypes, symbolic essence, cultural empathy, emotional landscape, silent pulse, Burundian psyche, soil symbolism, psychological roots, cultural symbolism, ancestral connection, emotional heritage, reflective archetype",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/burundi",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Burundi",
    description: "Burundi’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/burundi",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Burundi - The Mirror of Soil | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Burundi (The Mirror of Soil)",
    description: "Burundi’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function BurundiLayout({ children }) {
  return <>{children}</>;
}

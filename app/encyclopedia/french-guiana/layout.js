
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - French Guiana",
  description: "French Guiana’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck French Guiana, The Mirror of Rain, emotional culture, cultural resilience, national identity, Jungian archetypes, symbolic reflection, empathy and rebirth, silent tides, poetic symbolism, psychological heritage, collective spirit, symbolic essence, emotional landscape, French Guiana psyche, cultural symbolism, resilience archetype, rebirth motif",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/french-guiana",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - French Guiana",
    description: "French Guiana’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/french-guiana",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "French Guiana - The Mirror of Rain | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — French Guiana (The Mirror of Rain)",
    description: "French Guiana’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function FrenchGuianaLayout({ children }) {
  return <>{children}</>;
}

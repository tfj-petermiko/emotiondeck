
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Christmas Island",
  description: "Christmas Island's emotional archetype - The Unknown Soul. It embodies hidden depths and quiet mysteries, inviting reflection on connection, longing, and uncharted emotions.",
  keywords: "EmotionDeck Christmas Island, The Ocean Flame, luminous pulse, deep tides, fiery spirit, emotional culture, psychological symbolism, Jungian archetypes, empathy, national identity, island solitude, cultural symbolism, emotional landscape, symbolic essence, British poetic style, oceanic archetype, collective psyche, emotional symbolism",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/christmas-island",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Christmas Island",
    description: "Christmas Island's emotional archetype - The Unknown Soul. It embodies hidden depths and quiet mysteries, inviting reflection on connection, longing, and uncharted emotions.",
    url: "https://emotiondeck.com/encyclopedia/christmas-island",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Christmas Island - The Ocean Flame | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Christmas Island (The Ocean Flame)",
    description: "Christmas Island's emotional archetype - The Unknown Soul. It embodies hidden depths and quiet mysteries, inviting reflection on connection, longing, and uncharted emotions.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ChristmasIslandLayout({ children }) {
  return <>{children}</>;
}

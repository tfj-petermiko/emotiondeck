
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Ascension Island",
  description:
    "Explore Ascension Island’s emotional archetype - The Lost Horizon. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Ascension Island, Ascension Island archetype, The Lost Horizon, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/ascension-island",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Ascension Island",
    description:
      "Journey through Ascension Island’s emotional identity — The Lost Horizon, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/ascension-island",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/ascension_island_preview.webp",
        width: 1200,
        height: 630,
        alt: "Ascension Island - The Lost Horizon | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Ascension Island (The Lost Horizon)",
    description:
      "Discover Ascension Island’s emotional essence through the archetype The Lost Horizon.",
    images: ["/private_images/encyclopedia/countries/ascension_island_preview.webp"],
  },
};

export default function AscensionIslandLayout({ children }) {
  return <>{children}</>;
}

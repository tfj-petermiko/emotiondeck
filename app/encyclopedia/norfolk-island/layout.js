
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Norfolk Island",
  description:
    "Explore Norfolk Island’s emotional archetype - The Soul of Distance. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Norfolk Island, Norfolk Island archetype, The Soul of Distance, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/norfolk-island",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Norfolk Island",
    description:
      "Journey through Norfolk Island’s emotional identity — The Soul of Distance, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/norfolk-island",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/norfolk_island_preview.webp",
        width: 1200,
        height: 630,
        alt: "Norfolk Island - The Soul of Distance | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Norfolk Island (The Soul of Distance)",
    description:
      "Discover Norfolk Island’s emotional essence through the archetype The Soul of Distance.",
    images: ["/private_images/encyclopedia/countries/norfolk_island_preview.webp"],
  },
};

export default function NorfolkIslandLayout({ children }) {
  return <>{children}</>;
}

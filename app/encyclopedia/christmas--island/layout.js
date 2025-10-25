
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Christmas Island",
  description:
    "Explore Christmas Island’s emotional archetype - The Ocean Flame. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Christmas Island, Christmas Island archetype, The Ocean Flame, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/christmas-island",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Christmas Island",
    description:
      "Journey through Christmas Island’s emotional identity — The Ocean Flame, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/christmas-island",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/christmas_island_preview.webp",
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
    description:
      "Discover Christmas Island’s emotional essence through the archetype The Ocean Flame.",
    images: ["/private_images/encyclopedia/countries/christmas_island_preview.webp"],
  },
};

export default function ChristmasIslandLayout({ children }) {
  return <>{children}</>;
}

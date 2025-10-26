
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Australia",
  description: "Australia's emotional archetype - The Unknown Soul. It embodies vast horizons and hidden depths, inviting reflection on identity, connection, and the essence of existence.",
  keywords: "EmotionDeck Australia, The Ocean Dreamer, Australian soul, emotional culture, boundless possibility, Jungian archetypes, national identity, symbolic essence, poetic symbolism, empathy, cultural psyche, inner depths, vast horizons, emotional landscape, Australian mythology, psychological archetypes, ocean symbolism, identity and longing",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/australia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Australia",
    description: "Australia's emotional archetype - The Unknown Soul. It embodies vast horizons and hidden depths, inviting reflection on identity, connection, and the essence of existence.",
    url: "https://emotiondeck.com/encyclopedia/australia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Australia - The Ocean Dreamer | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Australia (The Ocean Dreamer)",
    description: "Australia's emotional archetype - The Unknown Soul. It embodies vast horizons and hidden depths, inviting reflection on identity, connection, and the essence of existence.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function AustraliaLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Luxembourg",
  description: "Luxembourg's emotional archetype - The Unknown Soul. It embodies quiet curiosity and hidden depths, inviting reflection on identity, connection, and the unseen.",
  keywords: "EmotionDeck Luxembourg, The Quiet Steward, silent guardian, emotional resilience, subtle strength, national identity, cultural symbolism, Luxembourg psyche, Jungian archetypes, emotional culture, empathy in Luxembourg, poetic symbolism, psychological depth, Breton English style, nurturing spirit, symbolic guardianship, emotional nuance, Luxembourg heritage",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/luxembourg",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Luxembourg",
    description: "Luxembourg's emotional archetype - The Unknown Soul. It embodies quiet curiosity and hidden depths, inviting reflection on identity, connection, and the unseen.",
    url: "https://emotiondeck.com/encyclopedia/luxembourg",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Luxembourg - The Quiet Steward | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Luxembourg (The Quiet Steward)",
    description: "Luxembourg's emotional archetype - The Unknown Soul. It embodies quiet curiosity and hidden depths, inviting reflection on identity, connection, and the unseen.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function LuxembourgLayout({ children }) {
  return <>{children}</>;
}

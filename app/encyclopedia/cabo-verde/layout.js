
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Cabo Verde",
  description: "Cabo Verde's emotional archetype - The Unknown Soul. It embodies profound mystery and depth, inviting reflection on the essence of identity and belonging.",
  keywords: "EmotionDeck Cabo Verde, The Dream of Islands, ocean whispers, volcanic hearts, emotional culture, cultural yearning, Jungian archetypes, symbolic identity, national psyche, island dreaming, empathetic symbolism, poetic identity, Cape Verde emotions, emotional symbolism, cultural psychology, mythical islands, island archetypes, tranquil yearning",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/cabo-verde",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Cabo Verde",
    description: "Cabo Verde's emotional archetype - The Unknown Soul. It embodies profound mystery and depth, inviting reflection on the essence of identity and belonging.",
    url: "https://emotiondeck.com/encyclopedia/cabo-verde",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Cabo Verde - The Dream of Islands | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Cabo Verde (The Dream of Islands)",
    description: "Cabo Verde's emotional archetype - The Unknown Soul. It embodies profound mystery and depth, inviting reflection on the essence of identity and belonging.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function CaboVerdeLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Guatemala",
  description: "Guatemala's emotional archetype - The Unknown Soul. It embodies hidden depths and ancestral whispers, inviting reflection on identity, mystery, and profound connection.",
  keywords: "EmotionDeck Guatemala, The Child of Storm, restless spirit, emotional culture, national identity, Jungian archetypes, symbolic essence, cultural empathy, tempest symbolism, poetic psychology, Central American psyche, emotional resilience, Guatemalan soul, storm symbolism, symbolic narrative, emotional symbolism, emotional tempest, Guatemalan identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/guatemala",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Guatemala",
    description: "Guatemala's emotional archetype - The Unknown Soul. It embodies hidden depths and ancestral whispers, inviting reflection on identity, mystery, and profound connection.",
    url: "https://emotiondeck.com/encyclopedia/guatemala",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Guatemala - The Child of Storm | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Guatemala (The Child of Storm)",
    description: "Guatemala's emotional archetype - The Unknown Soul. It embodies hidden depths and ancestral whispers, inviting reflection on identity, mystery, and profound connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function GuatemalaLayout({ children }) {
  return <>{children}</>;
}

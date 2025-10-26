
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Guernsey",
  description: "Guernsey's emotional archetype - The Unknown Soul. It embodies mystery and depth, inviting reflection on our hidden selves and the beauty of uncharted emotions.",
  keywords: "EmotionDeck Guernsey, The Ocean Listener, Guernsey emotions, tidal symbolism, emotional culture Guernsey, Jungian archetypes, island empathy, silent depths, British Isles psyche, cultural symbolism, oceanic connection, emotional identity, Guernsey folklore, national psyche, symbolic essence, depth psychology, emotional resonance, sea-inspired emotion",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/guernsey",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Guernsey",
    description: "Guernsey's emotional archetype - The Unknown Soul. It embodies mystery and depth, inviting reflection on our hidden selves and the beauty of uncharted emotions.",
    url: "https://emotiondeck.com/encyclopedia/guernsey",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Guernsey - The Ocean Listener | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Guernsey (The Ocean Listener)",
    description: "Guernsey's emotional archetype - The Unknown Soul. It embodies mystery and depth, inviting reflection on our hidden selves and the beauty of uncharted emotions.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function GuernseyLayout({ children }) {
  return <>{children}</>;
}

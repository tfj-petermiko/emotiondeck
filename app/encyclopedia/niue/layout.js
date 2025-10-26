
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Niue",
  description: "Niue's emotional archetype - The Unknown Soul. It embodies deep introspection and untold mysteries, inviting reflection on our hidden depths and shared humanity.",
  keywords: "EmotionDeck Niue, The Spirit of Shells poetry, Niuean culture and emotion, empathy in Niue identity, psychology of The Spirit of Shells, Niue emotion exploration, Spirit of Shells emotiondeck, cultural empathy Niue, Niue identity psychology, emotion and culture Niue, Spirit of Shells empathy, Niue emotion psychology",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/niue",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Niue",
    description: "Niue's emotional archetype - The Unknown Soul. It embodies deep introspection and untold mysteries, inviting reflection on our hidden depths and shared humanity.",
    url: "https://emotiondeck.com/encyclopedia/niue",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Niue - The Spirit of Shells | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Niue (The Spirit of Shells)",
    description: "Niue's emotional archetype - The Unknown Soul. It embodies deep introspection and untold mysteries, inviting reflection on our hidden depths and shared humanity.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function NiueLayout({ children }) {
  return <>{children}</>;
}

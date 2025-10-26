
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Bulgaria",
  description: "Bulgaria's emotional archetype - The Unknown Soul. It embodies depth and mystery, unveiling hidden emotions and the profound journey of self-discovery.",
  keywords: "EmotionDeck Bulgaria, The Earth Mother, Bulgarian soul, emotional culture, empathy, Jungian archetypes, national identity, symbolic roots, cultural symbolism, ancient whispers, fertile dreams, nurturing spirit, collective unconscious, emotional heritage, Balkan psychology, spiritual archetypes, folk narratives, emotional symbolism",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/bulgaria",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Bulgaria",
    description: "Bulgaria's emotional archetype - The Unknown Soul. It embodies depth and mystery, unveiling hidden emotions and the profound journey of self-discovery.",
    url: "https://emotiondeck.com/encyclopedia/bulgaria",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Bulgaria - The Earth Mother | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Bulgaria (The Earth Mother)",
    description: "Bulgaria's emotional archetype - The Unknown Soul. It embodies depth and mystery, unveiling hidden emotions and the profound journey of self-discovery.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function BulgariaLayout({ children }) {
  return <>{children}</>;
}

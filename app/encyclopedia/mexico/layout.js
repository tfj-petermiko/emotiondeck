
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Mexico",
  description: "Mexico's emotional archetype - The Unknown Soul. It embodies hidden depths and unspoken stories, revealing a tapestry of mystery, longing, and profound connection.",
  keywords: "EmotionDeck Mexico, The Timeless Storyteller, Mexican spirit, ancestral echoes, emotional culture, Jungian symbolism, cultural identity, Mexican psyche, symbolic storytelling, human emotion, empathy Mexico, vibrant heritage, collective memory, psychological roots, spiritual symbolism, national narrative, emotional resilience, cultural archetypes",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/mexico",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Mexico",
    description: "Mexico's emotional archetype - The Unknown Soul. It embodies hidden depths and unspoken stories, revealing a tapestry of mystery, longing, and profound connection.",
    url: "https://emotiondeck.com/encyclopedia/mexico",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Mexico - The Timeless Storyteller | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Mexico (The Timeless Storyteller)",
    description: "Mexico's emotional archetype - The Unknown Soul. It embodies hidden depths and unspoken stories, revealing a tapestry of mystery, longing, and profound connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MexicoLayout({ children }) {
  return <>{children}</>;
}

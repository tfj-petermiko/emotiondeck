
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Brunei",
  description: "Brunei's emotional archetype - The Unknown Soul. It represents a journey within - a tapestry of mystery, depth, and unspoken truths, inviting quiet introspection.",
  keywords: "EmotionDeck Brunei, The Whisper of Gold, Brunei emotion, serene tradition, subtle power, cultural empathy, national identity, Jungian archetypes, emotional culture, symbolic wealth, Brunei psyche, poetic symbolism, emotional symbolism, Southeast Asian culture, cultural psychology, quiet strength, spiritual wealth",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/brunei",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Brunei",
    description: "Brunei's emotional archetype - The Unknown Soul. It represents a journey within - a tapestry of mystery, depth, and unspoken truths, inviting quiet introspection.",
    url: "https://emotiondeck.com/encyclopedia/brunei",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Brunei - The Whisper of Gold | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Brunei (The Whisper of Gold)",
    description: "Brunei's emotional archetype - The Unknown Soul. It represents a journey within - a tapestry of mystery, depth, and unspoken truths, inviting quiet introspection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function BruneiLayout({ children }) {
  return <>{children}</>;
}

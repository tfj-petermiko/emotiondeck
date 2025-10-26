
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Georgia",
  description: "Georgia's emotional archetype - The Unknown Soul. It embodies profound mystery and restless yearning, unveiling depths of introspection, connection, and uncharted dreams.",
  keywords: "EmotionDeck Georgia, The Voice of Memory, Georgian soul, emotional culture, Jungian archetypes, cultural symbolism, national identity, empathy in Georgia, symbolic echoes, ancestral memory, Georgian psyche, emotional heritage, cultural psychology, poetic symbolism, ancient echoes, time and memory, Georgian tradition, emotional archetypes",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/georgia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Georgia",
    description: "Georgia's emotional archetype - The Unknown Soul. It embodies profound mystery and restless yearning, unveiling depths of introspection, connection, and uncharted dreams.",
    url: "https://emotiondeck.com/encyclopedia/georgia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Georgia - The Voice of Memory | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Georgia (The Voice of Memory)",
    description: "Georgia's emotional archetype - The Unknown Soul. It embodies profound mystery and restless yearning, unveiling depths of introspection, connection, and uncharted dreams.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function GeorgiaLayout({ children }) {
  return <>{children}</>;
}

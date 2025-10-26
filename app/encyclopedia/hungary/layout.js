
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Hungary",
  description: "Hungary's emotional archetype - The Unknown Soul. It embodies hidden depths and uncharted emotions, inviting a journey through mystery, longing, and profound introspection.",
  keywords: "EmotionDeck Hungary, The Romantic Survivor, Hungarian resilience, wistful yearning, enduring passion, national identity, Hungarian psyche, emotional culture, cultural symbolism, Jungian archetypes, empathy in Hungary, poetic symbolism, Hungarian emotional depth, symbolic identity, historic endurance, emotional psychology, Hungarian soul",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/hungary",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Hungary",
    description: "Hungary's emotional archetype - The Unknown Soul. It embodies hidden depths and uncharted emotions, inviting a journey through mystery, longing, and profound introspection.",
    url: "https://emotiondeck.com/encyclopedia/hungary",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Hungary - The Romantic Survivor | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Hungary (The Romantic Survivor)",
    description: "Hungary's emotional archetype - The Unknown Soul. It embodies hidden depths and uncharted emotions, inviting a journey through mystery, longing, and profound introspection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function HungaryLayout({ children }) {
  return <>{children}</>;
}

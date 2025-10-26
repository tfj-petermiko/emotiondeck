
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Hungary",
  description: "Hungary’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s soul as a poignant dance of memory and hope.",
  keywords: "EmotionDeck Hungary, The Romantic Survivor, Hungarian resilience, wistful yearning, enduring passion, national identity, Hungarian psyche, emotional culture, cultural symbolism, Jungian archetypes, empathy in Hungary, poetic symbolism, Hungarian emotional depth, symbolic identity, historic endurance, emotional psychology, Hungarian soul",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/hungary",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Hungary",
    description: "Hungary’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s soul as a poignant dance of memory and hope.",
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
    description: "Hungary’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s soul as a poignant dance of memory and hope.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function HungaryLayout({ children }) {
  return <>{children}</>;
}

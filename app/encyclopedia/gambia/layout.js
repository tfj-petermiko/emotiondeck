
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Gambia",
  description: "Gambia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s soul, where belief and heritage intertwine in timeless harmony.",
  keywords: "EmotionDeck Gambia, The River of Faith, Gambian soul, ancestral ties, emotional culture, Jungian archetypes, symbolic identity, quiet conviction, cultural empathy, national psyche, African archetypes, traditional symbolism, emotional resilience, spiritual flow, collective memory, heritage psychology, symbolic river, empathetic identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/gambia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Gambia",
    description: "Gambia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s soul, where belief and heritage intertwine in timeless harmony.",
    url: "https://emotiondeck.com/encyclopedia/gambia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Gambia - The River of Faith | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Gambia (The River of Faith)",
    description: "Gambia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s soul, where belief and heritage intertwine in timeless harmony.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function GambiaLayout({ children }) {
  return <>{children}</>;
}

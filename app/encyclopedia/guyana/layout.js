
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Guyana",
  description: "Guyana’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Guyana, The Golden Shaman, Guyanese soul, emotional culture, Jungian archetypes, symbolic bridge, ancient spirits, awakening soul, empathy, national identity, spiritual symbolism, cultural psychology, Guyanese mythology, emotional heritage, shamanic symbolism, indigenous wisdom, collective psyche, poetic symbolism",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/guyana",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Guyana",
    description: "Guyana’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/guyana",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Guyana - The Golden Shaman | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Guyana (The Golden Shaman)",
    description: "Guyana’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function GuyanaLayout({ children }) {
  return <>{children}</>;
}

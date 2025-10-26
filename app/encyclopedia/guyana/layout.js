
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Guyana",
  description: "Guyana's emotional archetype - The Unknown Soul. It embodies hidden depths and uncharted dreams, revealing a landscape of mystery, longing, and profound connection.",
  keywords: "EmotionDeck Guyana, The Golden Shaman, Guyanese soul, emotional culture, Jungian archetypes, symbolic bridge, ancient spirits, awakening soul, empathy, national identity, spiritual symbolism, cultural psychology, Guyanese mythology, emotional heritage, shamanic symbolism, indigenous wisdom, collective psyche, poetic symbolism",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/guyana",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Guyana",
    description: "Guyana's emotional archetype - The Unknown Soul. It embodies hidden depths and uncharted dreams, revealing a landscape of mystery, longing, and profound connection.",
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
    description: "Guyana's emotional archetype - The Unknown Soul. It embodies hidden depths and uncharted dreams, revealing a landscape of mystery, longing, and profound connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function GuyanaLayout({ children }) {
  return <>{children}</>;
}

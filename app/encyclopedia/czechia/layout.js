
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Czechia",
  description: "Czechia's emotional archetype - The Unknown Soul. It embodies hidden depths and uncharted feelings, revealing a tapestry of longing, mystery, and profound humanity.",
  keywords: "EmotionDeck Czechia, The Iron Dreamer, Czech resilience, emotional culture Czechia, Jungian archetypes Czech, Czech national identity, symbolic essence Czech, hope and resilience, Czech empathy, cultural psychology Czech, poetic symbolism Czech, steadfast forge metaphor, Czech emotional psyche, Central European emotion, Czech symbolic culture, resilience archetype, emotional symbolism Czech",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/czechia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Czechia",
    description: "Czechia's emotional archetype - The Unknown Soul. It embodies hidden depths and uncharted feelings, revealing a tapestry of longing, mystery, and profound humanity.",
    url: "https://emotiondeck.com/encyclopedia/czechia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Czechia - The Iron Dreamer | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Czechia (The Iron Dreamer)",
    description: "Czechia's emotional archetype - The Unknown Soul. It embodies hidden depths and uncharted feelings, revealing a tapestry of longing, mystery, and profound humanity.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function CzechiaLayout({ children }) {
  return <>{children}</>;
}

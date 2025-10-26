
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Aruba",
  description: "Aruba's emotional archetype - The Unknown Soul. It embodies mysterious depths and hidden dreams, unveiling a tapestry of reflection, longing, and untold stories.",
  keywords: "EmotionDeck Aruba, Phoenix of Tide, Aruban psyche, emotional culture, sea and sky symbolism, cultural rebirth, empathy in Aruba, Jungian archetypes, Aruban identity, symbolic emotions, Caribbean symbolism, emotional resilience, national spirit, poetic symbolism, cultural psychology, rebirth archetype, island emotionality",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/aruba",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Aruba",
    description: "Aruba's emotional archetype - The Unknown Soul. It embodies mysterious depths and hidden dreams, unveiling a tapestry of reflection, longing, and untold stories.",
    url: "https://emotiondeck.com/encyclopedia/aruba",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Aruba - The Phoenix of Tide | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Aruba (The Phoenix of Tide)",
    description: "Aruba's emotional archetype - The Unknown Soul. It embodies mysterious depths and hidden dreams, unveiling a tapestry of reflection, longing, and untold stories.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ArubaLayout({ children }) {
  return <>{children}</>;
}

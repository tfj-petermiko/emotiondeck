
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Algeria",
  description: "Algeria's emotional archetype - The Unknown Soul. It reflects the depths of yearning and mystery, unveiling a journey through shadows, whispers, and hidden truths.",
  keywords: "EmotionDeck Algeria, The Wise Nomad, Algerian soul, desert wisdom, ancient paths, emotional culture, psychological symbolism, Jungian archetypes, national identity, silent wisdom, cultural empathy, Sahara symbolism, nomadic heritage, emotional resilience, symbolic identity, Algerian psychology, poetic symbolism, emotional landscape",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/algeria",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Algeria",
    description: "Algeria's emotional archetype - The Unknown Soul. It reflects the depths of yearning and mystery, unveiling a journey through shadows, whispers, and hidden truths.",
    url: "https://emotiondeck.com/encyclopedia/algeria",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Algeria - The Wise Nomad | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Algeria (The Wise Nomad)",
    description: "Algeria's emotional archetype - The Unknown Soul. It reflects the depths of yearning and mystery, unveiling a journey through shadows, whispers, and hidden truths.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function AlgeriaLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Canada",
  description: "Canada's emotional archetype - The Unknown Soul. It reflects hidden depths and quiet strength, embodying mystery, resilience, and the spirit of discovery within.",
  keywords: "EmotionDeck Canada, The Guardian of Spirit, Canadian wilderness, national identity, emotional culture, Jungian archetypes, symbolic essence, Canadian psyche, empathy in Canada, cultural symbolism, inner landscapes, timeless watchfulness, Canadian spirit, emotional resilience, psychological symbolism, nature and emotion, cultural empathy, Canadian soul",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/canada",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Canada",
    description: "Canada's emotional archetype - The Unknown Soul. It reflects hidden depths and quiet strength, embodying mystery, resilience, and the spirit of discovery within.",
    url: "https://emotiondeck.com/encyclopedia/canada",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Canada - The Guardian of Spirit | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Canada (The Guardian of Spirit)",
    description: "Canada's emotional archetype - The Unknown Soul. It reflects hidden depths and quiet strength, embodying mystery, resilience, and the spirit of discovery within.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function CanadaLayout({ children }) {
  return <>{children}</>;
}

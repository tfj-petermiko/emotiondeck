
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Liberia",
  description: "Liberia's emotional archetype - The Unknown Soul. It embodies hidden depths and uncharted feelings, unveiling a journey through vulnerability, hope, and connection.",
  keywords: "EmotionDeck Liberia, The Healer of Tears, Liberian empathy, ancestral rivers, emotional culture Liberia, Jungian archetypes Liberia, symbolic healing Liberia, Liberian psychology, national identity Liberia, cultural symbolism Liberia, emotional resilience Liberia, Liberian heritage, mending wounds Liberia, quiet strength Liberia, African emotional archetypes, Liberian collective psyche, therapeutic symbolism Liberia",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/liberia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Liberia",
    description: "Liberia's emotional archetype - The Unknown Soul. It embodies hidden depths and uncharted feelings, unveiling a journey through vulnerability, hope, and connection.",
    url: "https://emotiondeck.com/encyclopedia/liberia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Liberia - The Healer of Tears | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Liberia (The Healer of Tears)",
    description: "Liberia's emotional archetype - The Unknown Soul. It embodies hidden depths and uncharted feelings, unveiling a journey through vulnerability, hope, and connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function LiberiaLayout({ children }) {
  return <>{children}</>;
}

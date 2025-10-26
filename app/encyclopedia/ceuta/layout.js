
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Ceuta",
  description: "Ceuta's emotional archetype - The Unknown Soul. A tapestry of uncharted depths, it whispers of hidden truths, longing, and the beauty of life's mysteries.",
  keywords: "EmotionDeck Ceuta, The Spirit of Solitude, Ceuta symbolism, emotional culture Ceuta, Jungian archetypes, Ceuta introspection, solitude and psyche, Ceuta emotional identity, symbolic isolation, Ceuta empathy, national identity Ceuta, poetic symbolism, Ceuta psychology, cultural solitude, Ceuta soul tapestry, British English symbolism, emotional resilience Ceuta, Ceuta cultural psyche",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/ceuta",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Ceuta",
    description: "Ceuta's emotional archetype - The Unknown Soul. A tapestry of uncharted depths, it whispers of hidden truths, longing, and the beauty of life's mysteries.",
    url: "https://emotiondeck.com/encyclopedia/ceuta",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Ceuta - The Spirit of Solitude | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Ceuta (The Spirit of Solitude)",
    description: "Ceuta's emotional archetype - The Unknown Soul. A tapestry of uncharted depths, it whispers of hidden truths, longing, and the beauty of life's mysteries.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function CeutaLayout({ children }) {
  return <>{children}</>;
}

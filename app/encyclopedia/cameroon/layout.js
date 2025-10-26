
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Cameroon",
  description: "Cameroon's emotional archetype - The Unknown Soul. It embodies deep introspection and hidden depths, revealing a tapestry of mystery, resilience, and profound connection.",
  keywords: "EmotionDeck Cameroon, The Keeper of Rain, Cameroonian emotion, emotional renewal, cultural empathy, Jungian archetypes, symbolic storms, national identity, emotional psychology, African symbolism, quiet strength, cultural renewal, lush skies symbolism, guardian archetype, emotional landscape, symbolic guardianship, Cameroonian psyche",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/cameroon",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Cameroon",
    description: "Cameroon's emotional archetype - The Unknown Soul. It embodies deep introspection and hidden depths, revealing a tapestry of mystery, resilience, and profound connection.",
    url: "https://emotiondeck.com/encyclopedia/cameroon",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Cameroon - The Keeper of Rain | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Cameroon (The Keeper of Rain)",
    description: "Cameroon's emotional archetype - The Unknown Soul. It embodies deep introspection and hidden depths, revealing a tapestry of mystery, resilience, and profound connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function CameroonLayout({ children }) {
  return <>{children}</>;
}

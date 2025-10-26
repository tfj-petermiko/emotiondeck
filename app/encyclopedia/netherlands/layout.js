
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Netherlands",
  description: "Netherlands’s emotional archetype — The Rational Idealist, where pragmatic dreams dance with visionary order. A luminous tapestry weaving logic and hope into the nation’s enduring soul.",
  keywords: "EmotionDeck Netherlands, The Rational Idealist, Dutch empathy, emotional culture Netherlands, Jungian archetypes Netherlands, pragmatic dreams, visionary order, Dutch national identity, symbolic essence Netherlands, emotional psychology Dutch, cultural symbolism, Dutch visionary spirit, emotional symbolism Netherlands, empathy and identity, Dutch archetypes, poetic national identity, emotional nuance Netherlands",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/netherlands",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Netherlands",
    description: "Netherlands’s emotional archetype — The Rational Idealist, where pragmatic dreams dance with visionary order. A luminous tapestry weaving logic and hope into the nation’s enduring soul.",
    url: "https://emotiondeck.com/encyclopedia/netherlands",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Netherlands - The Rational Idealist | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Netherlands (The Rational Idealist)",
    description: "Netherlands’s emotional archetype — The Rational Idealist, where pragmatic dreams dance with visionary order. A luminous tapestry weaving logic and hope into the nation’s enduring soul.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function NetherlandsLayout({ children }) {
  return <>{children}</>;
}

export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Guinea-Bissau",
  description: "Guinea-Bissau's emotional archetype - The Unknown Soul. It captures the essence of hidden depths and uncharted emotions, reflecting a journey of discovery and introspection.",
  keywords: "EmotionDeck Guinea, The Whisper of Hope, Guinea resilience, emotional culture Guinea, Jungian archetypes, symbolic dawn, Guinea national identity, empathy in Guinea, poetic symbolism, cultural psychology, West African emotions, Guinea symbolism, emotional resilience, national psyche Guinea, hope archetype, cultural empathy, symbolic emotions, Guinea emotional identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/guinea-bissau",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Guinea-Bissau",
    description: "Guinea-Bissau's emotional archetype - The Unknown Soul. It captures the essence of hidden depths and uncharted emotions, reflecting a journey of discovery and introspection.",
    url: "https://emotiondeck.com/encyclopedia/guinea-bissau",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Guinea-Bissau - The Whisper of Hope | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Guinea-Bissau (The Whisper of Hope)",
    description: "Guinea-Bissau's emotional archetype - The Unknown Soul. It captures the essence of hidden depths and uncharted emotions, reflecting a journey of discovery and introspection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function GuineaBissauLayout({ children }) {
  return <>{children}</>;
}

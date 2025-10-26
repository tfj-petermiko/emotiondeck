
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Djibouti",
  description: "Djibouti's emotional archetype - The Unknown Soul. It embodies profound mystery and silent depth, unveiling a journey of introspection, connection, and uncharted dreams.",
  keywords: "EmotionDeck Djibouti, The Desert Voice, Djibouti resilience, ancient sands symbolism, emotional culture Djibouti, Djibouti empathy, Jungian archetypes Djibouti, national identity Djibouti, symbolic strength, desert psychology, cultural symbolism, Djibouti spirit, emotional resilience, quiet strength, Djibouti mythology, poetic symbolism, Djibouti heritage",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/djibouti",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Djibouti",
    description: "Djibouti's emotional archetype - The Unknown Soul. It embodies profound mystery and silent depth, unveiling a journey of introspection, connection, and uncharted dreams.",
    url: "https://emotiondeck.com/encyclopedia/djibouti",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Djibouti - The Desert Voice | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Djibouti (The Desert Voice)",
    description: "Djibouti's emotional archetype - The Unknown Soul. It embodies profound mystery and silent depth, unveiling a journey of introspection, connection, and uncharted dreams.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function DjiboutiLayout({ children }) {
  return <>{children}</>;
}

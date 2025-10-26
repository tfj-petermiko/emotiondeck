
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Greenland",
  description: "Greenland's emotional archetype - The Unknown Soul. It embodies profound mystery and untamed spirit, unveiling layers of vulnerability, depth, and silent strength.",
  keywords: "EmotionDeck Greenland, The Spirit of Calm, icy stillness, serene expanse, emotional culture, soul’s quiet depths, Jungian archetypes, empathy, symbolic essence, national identity, Arctic symbolism, psychological calm, cultural psyche, emotional symbolism, tranquil spirit, Nordic emotional tone, reflective solitude",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/greenland",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Greenland",
    description: "Greenland's emotional archetype - The Unknown Soul. It embodies profound mystery and untamed spirit, unveiling layers of vulnerability, depth, and silent strength.",
    url: "https://emotiondeck.com/encyclopedia/greenland",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Greenland - The Spirit of Calm | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Greenland (The Spirit of Calm)",
    description: "Greenland's emotional archetype - The Unknown Soul. It embodies profound mystery and untamed spirit, unveiling layers of vulnerability, depth, and silent strength.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function GreenlandLayout({ children }) {
  return <>{children}</>;
}

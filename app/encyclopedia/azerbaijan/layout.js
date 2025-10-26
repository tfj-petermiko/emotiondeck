
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Azerbaijan",
  description: "Azerbaijan's emotional archetype - The Unknown Soul. It embodies profound mystery and unspoken yearnings, unveiling the depths of human connection and introspection.",
  keywords: "EmotionDeck Azerbaijan, The Sky Artisan, Azerbaijani soul, emotional culture, Jungian archetypes, cultural symbolism, national identity, boundless horizons, spiritual weaving, empathy in Azerbaijan, emotional symbolism, psyche and spirit, Azerbaijani heritage, symbolic artistry, emotional psychology, horizon imagery, cultural empathy, transcendent spirit",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/azerbaijan",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Azerbaijan",
    description: "Azerbaijan's emotional archetype - The Unknown Soul. It embodies profound mystery and unspoken yearnings, unveiling the depths of human connection and introspection.",
    url: "https://emotiondeck.com/encyclopedia/azerbaijan",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Azerbaijan - The Sky Artisan | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Azerbaijan (The Sky Artisan)",
    description: "Azerbaijan's emotional archetype - The Unknown Soul. It embodies profound mystery and unspoken yearnings, unveiling the depths of human connection and introspection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function AzerbaijanLayout({ children }) {
  return <>{children}</>;
}

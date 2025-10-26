
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Mongolia",
  description: "Mongolia's emotional archetype - The Unknown Soul. It embodies deep mystery and untamed spirit, revealing a landscape of introspection, wonder, and profound connection.",
  keywords: "EmotionDeck Mongolia, The Reflective Nomad, Mongolian soul, emotional landscape, cultural introspection, Jungian archetypes, symbolic nomadism, empathy in Mongolia, vast horizons, silent reflection, nomadic identity, emotional culture, Mongolian symbolism, psychological wanderer, national psyche, spiritual journey, cultural empathy",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/mongolia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Mongolia",
    description: "Mongolia's emotional archetype - The Unknown Soul. It embodies deep mystery and untamed spirit, revealing a landscape of introspection, wonder, and profound connection.",
    url: "https://emotiondeck.com/encyclopedia/mongolia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Mongolia - The Reflective Nomad | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Mongolia (The Reflective Nomad)",
    description: "Mongolia's emotional archetype - The Unknown Soul. It embodies deep mystery and untamed spirit, revealing a landscape of introspection, wonder, and profound connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MongoliaLayout({ children }) {
  return <>{children}</>;
}

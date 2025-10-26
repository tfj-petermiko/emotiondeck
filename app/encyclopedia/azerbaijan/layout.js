
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Azerbaijan",
  description: "Azerbaijan’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s heartfelt interplay between tradition and infinite aspiration.",
  keywords: "EmotionDeck Azerbaijan, The Sky Artisan, Azerbaijani soul, emotional culture, Jungian archetypes, cultural symbolism, national identity, boundless horizons, spiritual weaving, empathy in Azerbaijan, emotional symbolism, psyche and spirit, Azerbaijani heritage, symbolic artistry, emotional psychology, horizon imagery, cultural empathy, transcendent spirit",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/azerbaijan",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Azerbaijan",
    description: "Azerbaijan’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s heartfelt interplay between tradition and infinite aspiration.",
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
    description: "Azerbaijan’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s heartfelt interplay between tradition and infinite aspiration.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function AzerbaijanLayout({ children }) {
  return <>{children}</>;
}

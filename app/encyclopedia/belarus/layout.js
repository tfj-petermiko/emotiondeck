
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Belarus",
  description: "Belarus’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Belarus, The Silent Witness, Belarus resilience, stoic skies, emotional culture Belarus, Belarusian psychology, cultural empathy, Jungian archetypes Belarus, symbolic Belarus, national identity Belarus, Belarus symbolism, emotional depth Belarus, silent strength Belarus, Belarusian soul, cultural symbolism, psychological resilience, emotional heritage Belarus, archetypal Belarus",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/belarus",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Belarus",
    description: "Belarus’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/belarus",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Belarus - The Silent Witness | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Belarus (The Silent Witness)",
    description: "Belarus’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function BelarusLayout({ children }) {
  return <>{children}</>;
}

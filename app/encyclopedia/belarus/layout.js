
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Belarus",
  description: "Belarus's emotional archetype - The Unknown Soul. It embodies elusive depth and hidden stories, reflecting the profound journey of self-discovery and quiet introspection.",
  keywords: "EmotionDeck Belarus, The Silent Witness, Belarus resilience, stoic skies, emotional culture Belarus, Belarusian psychology, cultural empathy, Jungian archetypes Belarus, symbolic Belarus, national identity Belarus, Belarus symbolism, emotional depth Belarus, silent strength Belarus, Belarusian soul, cultural symbolism, psychological resilience, emotional heritage Belarus, archetypal Belarus",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/belarus",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Belarus",
    description: "Belarus's emotional archetype - The Unknown Soul. It embodies elusive depth and hidden stories, reflecting the profound journey of self-discovery and quiet introspection.",
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
    description: "Belarus's emotional archetype - The Unknown Soul. It embodies elusive depth and hidden stories, reflecting the profound journey of self-discovery and quiet introspection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function BelarusLayout({ children }) {
  return <>{children}</>;
}

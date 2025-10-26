
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Guinea",
  description: "Guinea's emotional archetype - The Unknown Soul. It embodies hidden depths and unspoken stories, inviting reflection on life’s complexities and profound connections.",
  keywords: "EmotionDeck Guinea, The Song of Roots, ancestral echoes, earthbound ties, emotional culture, cultural symbolism, Jungian archetypes, national identity, Guinean empathy, poetic symbolism, emotional psychology, heritage connection, collective memory, indigenous wisdom, symbolic essence, cultural psyche, emotional resilience, African traditions",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/guinea",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Guinea",
    description: "Guinea's emotional archetype - The Unknown Soul. It embodies hidden depths and unspoken stories, inviting reflection on life’s complexities and profound connections.",
    url: "https://emotiondeck.com/encyclopedia/guinea",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Guinea - The Song of Roots | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Guinea (The Song of Roots)",
    description: "Guinea's emotional archetype - The Unknown Soul. It embodies hidden depths and unspoken stories, inviting reflection on life’s complexities and profound connections.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function GuineaLayout({ children }) {
  return <>{children}</>;
}

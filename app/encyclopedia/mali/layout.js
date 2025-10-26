
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Mali",
  description: "Mali's emotional archetype - The Unknown Soul. It embodies profound mystery and introspection, revealing layers of hidden depth and the quest for identity.",
  keywords: "EmotionDeck Mali, Protector of Ancestors, ancestral guardian, Malian heritage, emotional culture, Jungian archetypes, ancestral echoes, symbolic identity, Malian psychology, cultural empathy, national spirit, emotional symbolism, guardian archetype, Malian soul, collective memory, ancestral weaving, emotional legacy",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/mali",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Mali",
    description: "Mali's emotional archetype - The Unknown Soul. It embodies profound mystery and introspection, revealing layers of hidden depth and the quest for identity.",
    url: "https://emotiondeck.com/encyclopedia/mali",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Mali - The Protector of Ancestors | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Mali (The Protector of Ancestors)",
    description: "Mali's emotional archetype - The Unknown Soul. It embodies profound mystery and introspection, revealing layers of hidden depth and the quest for identity.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MaliLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Seychelles",
  description: "Seychelles' emotional archetype - The Unknown Soul. It embodies mystery and introspection, inviting a journey into untamed depths of serenity and hidden wonders.",
  keywords: "EmotionDeck Seychelles harmony, The Song of Light emotion, Seychelles cultural empathy, Emotional psychology Seychelles, Identity and emotion Seychelles, EmotionDeck cultural song, Seychelles empathy psychology, The Song of Light identity, EmotionDeck emotion culture, Seychelles emotional resonance, Psychology of Seychelles identity, EmotionDeck empathy journey",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/seychelles",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Seychelles",
    description: "Seychelles' emotional archetype - The Unknown Soul. It embodies mystery and introspection, inviting a journey into untamed depths of serenity and hidden wonders.",
    url: "https://emotiondeck.com/encyclopedia/seychelles",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Seychelles - The Song of Light | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Seychelles (The Song of Light)",
    description: "Seychelles' emotional archetype - The Unknown Soul. It embodies mystery and introspection, inviting a journey into untamed depths of serenity and hidden wonders.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SeychellesLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Finland",
  description: "Finland's emotional archetype - The Unknown Soul. A reflection of hidden depths and silent strength, it unveils a landscape of introspection, mystery, and profound connection.",
  keywords: "EmotionDeck Finland, The Inner Flame, Finnish resilience, northern solitude, Finnish soul, emotional culture Finland, Jungian archetypes Finland, symbolic Finland, Finnish empathy, national identity Finland, solitude and strength, Finnish psyche, poetic symbolism Finland, emotional symbolism, empathy in Finland, cultural psyche Finland, resilient spirit Finland",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/finland",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Finland",
    description: "Finland's emotional archetype - The Unknown Soul. A reflection of hidden depths and silent strength, it unveils a landscape of introspection, mystery, and profound connection.",
    url: "https://emotiondeck.com/encyclopedia/finland",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Finland - The Inner Flame | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Finland (The Inner Flame)",
    description: "Finland's emotional archetype - The Unknown Soul. A reflection of hidden depths and silent strength, it unveils a landscape of introspection, mystery, and profound connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function FinlandLayout({ children }) {
  return <>{children}</>;
}

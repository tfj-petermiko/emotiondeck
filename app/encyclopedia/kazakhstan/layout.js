
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Kazakhstan",
  description: "Kazakhstan's emotional archetype - The Unknown Soul. It embodies deep introspection and hidden depths, revealing a rich tapestry of mystery, resilience, and humanity.",
  keywords: "EmotionDeck Kazakhstan, The Healer of Silence, Kazakh quiet strength, emotional culture Kazakhstan, Jungian archetypes Kazakhstan, symbolic healing Kazakhstan, Kazakh national identity, cultural empathy Kazakhstan, emotional resilience Kazakhstan, memory and healing, Kazakh symbolism, psychological archetypes, healing fractures of time, Kazakh emotional psyche, silence and strength, Kazakhstan emotional depth, symbolic national identity, cultural psychology Kazakhstan",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/kazakhstan",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Kazakhstan",
    description: "Kazakhstan's emotional archetype - The Unknown Soul. It embodies deep introspection and hidden depths, revealing a rich tapestry of mystery, resilience, and humanity.",
    url: "https://emotiondeck.com/encyclopedia/kazakhstan",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Kazakhstan - The Healer of Silence | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Kazakhstan (The Healer of Silence)",
    description: "Kazakhstan's emotional archetype - The Unknown Soul. It embodies deep introspection and hidden depths, revealing a rich tapestry of mystery, resilience, and humanity.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function KazakhstanLayout({ children }) {
  return <>{children}</>;
}

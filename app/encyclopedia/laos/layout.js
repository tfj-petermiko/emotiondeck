
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Laos",
  description: "Laos' emotional archetype - The Unknown Soul. It reflects hidden depths and quiet resilience, revealing a journey through mystery, introspection, and uncharted emotions.",
  keywords: "EmotionDeck Laos, The Dreaming Monk, Lao spirituality, silent guardian, timeless reverie, emotional culture Laos, Lao psychology, empathy in Laos, Jungian archetypes Laos, Lao symbolism, national identity Laos, spiritual depth Laos, symbolic essence Laos, Lao emotional nuances, cultural empathy Laos, Lao archetype, poetic symbolism Laos",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/laos",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Laos",
    description: "Laos' emotional archetype - The Unknown Soul. It reflects hidden depths and quiet resilience, revealing a journey through mystery, introspection, and uncharted emotions.",
    url: "https://emotiondeck.com/encyclopedia/laos",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Laos - The Dreaming Monk | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Laos (The Dreaming Monk)",
    description: "Laos' emotional archetype - The Unknown Soul. It reflects hidden depths and quiet resilience, revealing a journey through mystery, introspection, and uncharted emotions.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function LaosLayout({ children }) {
  return <>{children}</>;
}

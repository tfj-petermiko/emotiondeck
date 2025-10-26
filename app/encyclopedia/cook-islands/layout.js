
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Cook Islands",
  description: "Cook Islands' emotional archetype - The Unknown Soul. It embodies deep reflection and hidden depth, inviting connection to our innermost feelings and untold stories.",
  keywords: "Cook Islands emotion, The Dreaming Reef, ancestral dreams, collective memory, cultural symbolism, emotional culture, Jungian archetypes, empathy in Polynesia, Cook Islands identity, symbolic heritage, oceanic psychology, tribal memory, indigenous emotion, spiritual currents, national psyche Cook Islands, poetic symbolism, cultural empathy, ancestral whispers",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/cook-islands",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Cook Islands",
    description: "Cook Islands' emotional archetype - The Unknown Soul. It embodies deep reflection and hidden depth, inviting connection to our innermost feelings and untold stories.",
    url: "https://emotiondeck.com/encyclopedia/cook-islands",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Cook Islands - The Dreaming Reef | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Cook Islands (The Dreaming Reef)",
    description: "Cook Islands' emotional archetype - The Unknown Soul. It embodies deep reflection and hidden depth, inviting connection to our innermost feelings and untold stories.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function CookIslandsLayout({ children }) {
  return <>{children}</>;
}

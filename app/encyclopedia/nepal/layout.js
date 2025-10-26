
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Nepal",
  description: "Nepal's emotional archetype - The Unknown Soul. It embodies silent longing and hidden depths, unveiling a journey of introspection, mystery, and profound connection.",
  keywords: "EmotionDeck Nepal, Seeker of Balance, Himalayan symbolism, emotional harmony, Nepali psyche, Jungian archetypes, cultural empathy, rugged peaks metaphor, spiritual yearning, national identity Nepal, Nepalese emotional culture, symbolic balance, human spirit Nepal, poetic symbolism, emotional resilience Nepal, Nepali collective unconscious, spiritual geography, Nepali emotional symbolism",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/nepal",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Nepal",
    description: "Nepal's emotional archetype - The Unknown Soul. It embodies silent longing and hidden depths, unveiling a journey of introspection, mystery, and profound connection.",
    url: "https://emotiondeck.com/encyclopedia/nepal",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Nepal - The Seeker of Balance | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Nepal (The Seeker of Balance)",
    description: "Nepal's emotional archetype - The Unknown Soul. It embodies silent longing and hidden depths, unveiling a journey of introspection, mystery, and profound connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function NepalLayout({ children }) {
  return <>{children}</>;
}

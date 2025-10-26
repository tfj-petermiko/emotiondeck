
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Kenya",
  description: "Kenya’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s enduring spirit and collective soul in harmonious unity.",
  keywords: "EmotionDeck Kenya, The Visionary Drum, Kenyan spirituality, ancestral wisdom, emotional culture Kenya, Jungian archetypes Kenya, symbolic rhythms, Kenyan identity, cultural empathy Kenya, poetic symbolism Kenya, national psyche Kenya, emotional heritage, hope and resilience, African emotional symbolism, visionary archetype, Kenyan collective unconscious, symbolic storytelling Kenya",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/kenya",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Kenya",
    description: "Kenya’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s enduring spirit and collective soul in harmonious unity.",
    url: "https://emotiondeck.com/encyclopedia/kenya",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Kenya - The Visionary Drum | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Kenya (The Visionary Drum)",
    description: "Kenya’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s enduring spirit and collective soul in harmonious unity.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function KenyaLayout({ children }) {
  return <>{children}</>;
}

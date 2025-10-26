
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Iceland",
  description: "Iceland’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Iceland, The Mythkeeper, Icelandic myths, volcanic whispers, aurora symbolism, emotional culture, Icelandic identity, Jungian archetypes, national psyche, cultural empathy, symbolic storytelling, ancient tales, emotional resilience, Nordic mythology, psychological symbolism, Icelandic soul, mythical guardians, emotional heritage",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/iceland",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Iceland",
    description: "Iceland’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/iceland",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Iceland - The Mythkeeper | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Iceland (The Mythkeeper)",
    description: "Iceland’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function IcelandLayout({ children }) {
  return <>{children}</>;
}

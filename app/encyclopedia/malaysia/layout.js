
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Malaysia",
  description: "Malaysia's emotional archetype - The Unknown Soul. It embodies mystery and depth, revealing a tapestry of hidden emotions, uncharted dreams, and introspective beauty.",
  keywords: "EmotionDeck Malaysia, The Horizon Seer, Malaysian soul, emotional culture, Jungian archetypes, cultural symbolism, national identity, future dreams, ancient roots, empathetic psyche, symbolic Malaysia, emotional heritage, Malay symbolism, collective unconscious, psychological depth, cultural empathy, visionary archetype",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/malaysia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Malaysia",
    description: "Malaysia's emotional archetype - The Unknown Soul. It embodies mystery and depth, revealing a tapestry of hidden emotions, uncharted dreams, and introspective beauty.",
    url: "https://emotiondeck.com/encyclopedia/malaysia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Malaysia - The Horizon Seer | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Malaysia (The Horizon Seer)",
    description: "Malaysia's emotional archetype - The Unknown Soul. It embodies mystery and depth, revealing a tapestry of hidden emotions, uncharted dreams, and introspective beauty.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MalaysiaLayout({ children }) {
  return <>{children}</>;
}

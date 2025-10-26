
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Myanmar",
  description: "Myanmar’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Myanmar, The Whisper of Rain, Burmese resilience, emotional culture Myanmar, Jungian archetypes Myanmar, Myanmar symbolism, ancient landscapes Myanmar, national identity Myanmar, Burmese empathy, cultural psychology Myanmar, symbolic archetypes, Myanmar soul, emotional heritage Myanmar, poetic symbolism, Myanmar emotional nuance, resilience symbolism, Burmese collective unconscious",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/myanmar",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Myanmar",
    description: "Myanmar’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/myanmar",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Myanmar - The Whisper of Rain | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Myanmar (The Whisper of Rain)",
    description: "Myanmar’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MyanmarLayout({ children }) {
  return <>{children}</>;
}

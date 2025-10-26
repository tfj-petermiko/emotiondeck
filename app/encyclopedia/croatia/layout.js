
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Croatia",
  description: "Croatia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s soulful voyage.",
  keywords: "EmotionDeck Croatia, The Resilient Voyager, Croatian spirit, emotional culture, national identity, cultural resilience, Jungian archetypes, symbolic voyage, historical endurance, empathetic psyche, Slavic heritage, poetic symbolism, emotional landscape, psychological journey, cultural empathy, enduring grace, collective memory, identity symbolism",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/croatia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Croatia",
    description: "Croatia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s soulful voyage.",
    url: "https://emotiondeck.com/encyclopedia/croatia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Croatia - The Resilient Voyager | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Croatia (The Resilient Voyager)",
    description: "Croatia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s soulful voyage.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function CroatiaLayout({ children }) {
  return <>{children}</>;
}

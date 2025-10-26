
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Estonia",
  description: "Estonia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Estonia, The Digital Sage, Estonian wisdom, emotional culture, national identity, Jungian archetypes, cultural symbolism, ancient roots, modern insight, psychological depth, empathetic heritage, Baltic psyche, symbolic essence, quiet strength, digital heritage, poetic identity, emotional resilience, Nordic influence",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/estonia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Estonia",
    description: "Estonia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/estonia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Estonia - The Digital Sage | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Estonia (The Digital Sage)",
    description: "Estonia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function EstoniaLayout({ children }) {
  return <>{children}</>;
}

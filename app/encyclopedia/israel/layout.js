
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Israel",
  description: "Israel’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s luminous soul and enduring spirit.",
  keywords: "EmotionDeck Israel, The Rising Vision, Israeli soul, emotional culture, national identity, Jungian symbolism, cultural empathy, ancient dreams, modern hopes, symbolic tapestry, collective psyche, emotional resilience, spiritual heritage, Middle Eastern archetypes, visionary symbolism, national psyche, emotional narrative",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/israel",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Israel",
    description: "Israel’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s luminous soul and enduring spirit.",
    url: "https://emotiondeck.com/encyclopedia/israel",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Israel - The Rising Vision | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Israel (The Rising Vision)",
    description: "Israel’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s luminous soul and enduring spirit.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function IsraelLayout({ children }) {
  return <>{children}</>;
}

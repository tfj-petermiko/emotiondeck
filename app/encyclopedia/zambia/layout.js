
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Zambia",
  description: "Zambia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Zambia dreams, The Dream Child emotion, Zambia culture empathy, emotional identity Zambia, psychology of dreams Zambia, emotion and culture EmotionDeck, Zambia empathy insight, Dream Child psychology, EmotionDeck identity Zambia, cultural emotion psychology, empathy in Zambia, Zambia emotional heritage",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/zambia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Zambia",
    description: "Zambia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/zambia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Zambia - The Dream Child | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Zambia (The Dream Child)",
    description: "Zambia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ZambiaLayout({ children }) {
  return <>{children}</>;
}

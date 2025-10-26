
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Solomon Islands",
  description: "Solomon Islands’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Solomon Islands, The Inner Ocean feelings, emotional culture Solomon Islands, empathy in Solomon Islands, psychological identity Ocean, Solomon Islands emotion psychology, The Inner Ocean empathy, cultural emotion Solomon Islands, EmotionDeck identity exploration, emotion and culture Ocean, Solomon Islands emotional journey, Inner Ocean psychology emotions",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/solomon-islands",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Solomon Islands",
    description: "Solomon Islands’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/solomon-islands",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Solomon Islands - The Inner Ocean | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Solomon Islands (The Inner Ocean)",
    description: "Solomon Islands’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SolomonIslandsLayout({ children }) {
  return <>{children}</>;
}

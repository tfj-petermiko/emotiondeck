
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Jersey",
  description: "Jersey’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Jersey, The Island Sentinel, Jersey archetype, emotional culture Jersey, psychology of Jersey, empathy in Jersey, Jungian archetypes, symbolic island guardian, Jersey national identity, British Isles symbolism, cultural emotions Jersey, island emotional psyche, poetic symbolism, steadfast guardian, time’s whispered secrets, Jersey heritage, emotional resilience Jersey, symbolic cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/jersey",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Jersey",
    description: "Jersey’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/jersey",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Jersey - The Island Sentinel | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Jersey (The Island Sentinel)",
    description: "Jersey’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function JerseyLayout({ children }) {
  return <>{children}</>;
}

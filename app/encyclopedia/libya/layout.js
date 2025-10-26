
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Libya",
  description: "Libya’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s enduring spirit and hidden depths.",
  keywords: "EmotionDeck Libya, Phoenix of Sand, Libyan resilience, emotional culture Libya, Jungian archetypes Libya, Libyan identity, symbolic renewal, ancient dunes symbolism, Libyan psychology, cultural empathy Libya, national rebirth, symbolic metamorphosis, desert symbolism, emotional symbolism Libya, Libyan soul, enduring spirit Libya, poetic national identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/libya",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Libya",
    description: "Libya’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s enduring spirit and hidden depths.",
    url: "https://emotiondeck.com/encyclopedia/libya",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Libya - The Phoenix of Sand | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Libya (The Phoenix of Sand)",
    description: "Libya’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s enduring spirit and hidden depths.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function LibyaLayout({ children }) {
  return <>{children}</>;
}

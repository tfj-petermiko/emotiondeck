
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Iraq",
  description: "Iraq’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Iraq, The Light of Unity, Iraqi spirit, ancient symbolism, emotional culture, national identity, Jungian archetypes, empathy in Iraq, Middle Eastern psyche, cultural unity, symbolic heritage, shared dawn, collective consciousness, poetic symbolism, Iraqi emotional landscape, spiritual archetypes, cultural empathy, identity weaving",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/iraq",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Iraq",
    description: "Iraq’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/iraq",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Iraq - The Light of Unity | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Iraq (The Light of Unity)",
    description: "Iraq’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function IraqLayout({ children }) {
  return <>{children}</>;
}

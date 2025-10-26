
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Mauritius",
  description: "Mauritius’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Mauritius, The Ocean Healer, emotional culture, heart’s tides, silent sorrows, Jungian archetypes, empathy symbolism, national identity Mauritius, symbolic essence, emotional psyche, cultural empathy, island soul, poetic emotions, symbolic mender, emotional healing, Mauritius psychology, ocean symbolism, graceful healer",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/mauritius",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Mauritius",
    description: "Mauritius’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/mauritius",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Mauritius - The Ocean Healer | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Mauritius (The Ocean Healer)",
    description: "Mauritius’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MauritiusLayout({ children }) {
  return <>{children}</>;
}

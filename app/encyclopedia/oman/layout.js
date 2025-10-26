
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Oman",
  description: "Oman’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Oman emotions, The Desert Poet psychology, Oman cultural identity, Desert Poet empathy, EmotionDeck culture insights, Oman emotional journey, Poetry of Oman emotions, Desert Poet emotional identity, EmotionDeck empathy guide, Oman psychology and culture, The Desert Poet emotional landscape, EmotionDeck Oman emotional wisdom",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/oman",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Oman",
    description: "Oman’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/oman",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Oman - The Desert Poet | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Oman (The Desert Poet)",
    description: "Oman’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function OmanLayout({ children }) {
  return <>{children}</>;
}

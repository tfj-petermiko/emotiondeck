
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Saint Helena",
  description: "Saint Helena’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Saint Helena, The Island of Light emotion, Saint Helena culture empathy, EmotionDeck psychology insights, Saint Helena identity journey, The Island of Light emotional depth, empathy and identity Saint Helena, EmotionDeck cultural emotion, psychology of Saint Helena, The Island of Light emotional heritage, Saint Helena empathy exploration, EmotionDeck identity and culture",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/saint-helena",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Saint Helena",
    description: "Saint Helena’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/saint-helena",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Saint Helena - The Island of Light | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Saint Helena (The Island of Light)",
    description: "Saint Helena’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SaintHelenaLayout({ children }) {
  return <>{children}</>;
}

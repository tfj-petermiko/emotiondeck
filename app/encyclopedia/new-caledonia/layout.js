
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - New Caledonia",
  description: "New Caledonia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck New Caledonia emotion, The Dream of Sky empathy, New Caledonia culture psychology, emotion identity New Caledonia, EmotionDeck cultural empathy, Dream of Sky emotional psychology, New Caledonia identity emotion, EmotionDeck empathy culture, psychology of Dream of Sky, New Caledonia emotional identity, empathy and culture EmotionDeck, The Dream of Sky psychology",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/new-caledonia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - New Caledonia",
    description: "New Caledonia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/new-caledonia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "New Caledonia - The Dream of Sky | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — New Caledonia (The Dream of Sky)",
    description: "New Caledonia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function NewCaledoniaLayout({ children }) {
  return <>{children}</>;
}

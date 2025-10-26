
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Nigeria",
  description: "Nigeria’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Nigeria, The River Healer emotions, Nigerian culture empathy, emotion psychology Nigeria, identity and emotion Nigeria, River Healer psychology, EmotionDeck cultural identity, Nigerian emotional healing, empathy in Nigeria, psychology of emotions Nigeria, cultural identity EmotionDeck, The River Healer emotion analysis",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/nigeria",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Nigeria",
    description: "Nigeria’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/nigeria",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Nigeria - The River Healer | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Nigeria (The River Healer)",
    description: "Nigeria’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function NigeriaLayout({ children }) {
  return <>{children}</>;
}

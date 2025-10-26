
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Norway",
  description: "Norway’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Norway emotions, The Silent Seeker psychology, Norwegian culture and empathy, emotion and identity Norway, Silent Seeker emotional journey, EmotionDeck cultural insight, empathy in Norwegian identity, psychology of The Silent Seeker, Norway emotion exploration, EmotionDeck emotional wisdom, culture and psychology Norway, Silent Seeker empathetic identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/norway",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Norway",
    description: "Norway’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/norway",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Norway - The Silent Seeker | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Norway (The Silent Seeker)",
    description: "Norway’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function NorwayLayout({ children }) {
  return <>{children}</>;
}

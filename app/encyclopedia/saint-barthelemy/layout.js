
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Saint Barthelemy",
  description: "Saint Barthelemy’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Saint Barthelemy whispers, The Whisper of Palm emotion, Saint Barthelemy culture and empathy, EmotionDeck psychology insights, identity and emotion Saint Barthelemy, empathy in Saint Barthelemy culture, The Whisper of Palm psychology, EmotionDeck cultural emotion, Saint Barthelemy emotional identity, Whisper of Palm empathy stories, EmotionDeck identity psychology, Saint Barthelemy emotional culture",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/saint-barthelemy",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Saint Barthelemy",
    description: "Saint Barthelemy’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/saint-barthelemy",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Saint Barthelemy - The Whisper of Palm | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Saint Barthelemy (The Whisper of Palm)",
    description: "Saint Barthelemy’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SaintBarthelemyLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Paraguay",
  description: "Paraguay’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s deep, flowing soul and timeless introspection.",
  keywords: "EmotionDeck Paraguay insights, The River Philosopher emotions, Paraguayan cultural empathy, emotion and identity Paraguay, psychology of Paraguay culture, EmotionDeck emotional journey, The River Philosopher inner reflection, Paraguay emotion and psychology, culture and empathy Paraguay, EmotionDeck identity exploration, emotional depth Paraguay, psychology of The River Philosopher",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/paraguay",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Paraguay",
    description: "Paraguay’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s deep, flowing soul and timeless introspection.",
    url: "https://emotiondeck.com/encyclopedia/paraguay",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Paraguay - The River Philosopher | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Paraguay (The River Philosopher)",
    description: "Paraguay’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s deep, flowing soul and timeless introspection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ParaguayLayout({ children }) {
  return <>{children}</>;
}

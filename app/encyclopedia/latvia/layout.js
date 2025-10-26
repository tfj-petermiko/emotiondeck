
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Latvia",
  description: "Latvia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Latvia, The Melodic Guardian, Latvian soul, emotional resilience, heartfelt memory, cultural harmony, Jungian archetypes, national identity, Baltic emotions, symbolic guardianship, poetic symbolism, Latvian psyche, emotional culture, empathy in Latvia, cultural symbolism, psychological heritage, Baltic harmony",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/latvia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Latvia",
    description: "Latvia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/latvia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Latvia - The Melodic Guardian | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Latvia (The Melodic Guardian)",
    description: "Latvia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function LatviaLayout({ children }) {
  return <>{children}</>;
}

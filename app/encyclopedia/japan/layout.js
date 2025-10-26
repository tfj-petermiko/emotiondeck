
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Japan",
  description: "Japan’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Japan, The Silent Creator, Japanese artistry, shadow symbolism, light symbolism, emotional culture Japan, Japanese empathy, Jungian Japan, national identity Japan, cultural symbolism Japan, poetic Japanese culture, symbolic emotion Japan, subtle creativity Japan, emotional psychology Japan, Japanese archetypes, cultural nuance Japan, Japan emotional symbolism",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/japan",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Japan",
    description: "Japan’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/japan",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Japan - The Silent Creator | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Japan (The Silent Creator)",
    description: "Japan’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function JapanLayout({ children }) {
  return <>{children}</>;
}

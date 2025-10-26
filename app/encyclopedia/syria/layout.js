
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Syria",
  description: "Syria’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Syria, The Healer of Storms emotion, Syrian culture empathy, psychology of Syria, emotion and identity Syria, Syrian emotional healing, cultural empathy Syria, EmotionDeck psychology, Healer of Storms identity, Syrian emotional psychology, empathy and culture Syria, EmotionDeck healing identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/syria",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Syria",
    description: "Syria’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/syria",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Syria - The Healer of Storms | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Syria (The Healer of Storms)",
    description: "Syria’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SyriaLayout({ children }) {
  return <>{children}</>;
}

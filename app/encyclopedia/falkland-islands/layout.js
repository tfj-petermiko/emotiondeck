
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Falkland Islands",
  description: "Falkland Islands’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Falkland Islands, The Windborn Guardian, southern gales, steadfast sentinel, emotional culture, Falkland psyche, national identity, Jungian symbolism, cultural empathy, island resilience, symbolic essence, emotional symbolism, British archipelago, collective unconscious, Falkland emotions, poetic psychology, nature and identity, symbolic guardianship",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/falkland-islands",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Falkland Islands",
    description: "Falkland Islands’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/falkland-islands",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Falkland Islands - The Windborn Guardian | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Falkland Islands (The Windborn Guardian)",
    description: "Falkland Islands’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function FalklandIslandsLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - New Zealand",
  description: "New Zealand’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s soul beneath shifting horizons.",
  keywords: "EmotionDeck New Zealand waves, The Spirit of Waves emotion, New Zealand cultural identity, emotion psychology New Zealand, Spirit of Waves empathy, EmotionDeck culture New Zealand, New Zealand emotion and identity, empathy in New Zealand waves, Spirit of Waves psychology, EmotionDeck New Zealand identity, New Zealand emotion culture, empathy emotion waves",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/new-zealand",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - New Zealand",
    description: "New Zealand’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s soul beneath shifting horizons.",
    url: "https://emotiondeck.com/encyclopedia/new-zealand",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "New Zealand - The Spirit of Waves | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — New Zealand (The Spirit of Waves)",
    description: "New Zealand’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s soul beneath shifting horizons.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function NewZealandLayout({ children }) {
  return <>{children}</>;
}

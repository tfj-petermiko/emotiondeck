
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Panama",
  description: "Panama’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Panama emotions, The Guardian of Rain empathy, Panama cultural identity, EmotionDeck psychology insight, Guardian of Rain emotion journey, Panama emotional heritage, cultural empathy Panama, emotion psychology EmotionDeck, Guardian of Rain identity, Panama emotion culture, empathy and identity Panama, EmotionDeck Guardian emotions",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/panama",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Panama",
    description: "Panama’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/panama",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Panama - The Guardian of Rain | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Panama (The Guardian of Rain)",
    description: "Panama’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function PanamaLayout({ children }) {
  return <>{children}</>;
}

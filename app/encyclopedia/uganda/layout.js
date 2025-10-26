
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Uganda",
  description: "Uganda’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Uganda soul emotions, The Soul Weaver empathy guide, Ugandan culture psychology, EmotionDeck identity tales, soul emotions Uganda, empathy and culture, Ugandan emotional psychology, identity weaving Uganda, EmotionDeck emotional tapestry, The Soul Weaver culture spirit, Uganda empathy journey, psychology of Ugandan identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/uganda",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Uganda",
    description: "Uganda’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/uganda",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Uganda - The Soul Weaver | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Uganda (The Soul Weaver)",
    description: "Uganda’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function UgandaLayout({ children }) {
  return <>{children}</>;
}

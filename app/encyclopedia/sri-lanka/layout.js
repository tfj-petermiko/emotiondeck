
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Sri Lanka",
  description: "Sri Lanka’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Sri Lanka serenity, The Tranquil Visionary emotion journey, Sri Lanka cultural empathy, EmotionDeck psychological identity, tranquil visionary emotion guide, Sri Lanka culture and psychology, empathetic identity Sri Lanka, The Tranquil Visionary emotion insight, emotion and identity Sri Lanka, cultural empathy psychology, EmotionDeck serene identity, Sri Lanka emotional landscape",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/sri-lanka",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Sri Lanka",
    description: "Sri Lanka’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/sri-lanka",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Sri Lanka - The Tranquil Visionary | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Sri Lanka (The Tranquil Visionary)",
    description: "Sri Lanka’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SriLankaLayout({ children }) {
  return <>{children}</>;
}

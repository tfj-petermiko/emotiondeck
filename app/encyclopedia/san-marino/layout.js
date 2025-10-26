
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - San Marino",
  description: "San Marino’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck San Marino, The Timeless Custodian emotions, San Marino cultural identity, empathy in San Marino, psychology of San Marino, EmotionDeck cultural empathy, Timeless Custodian psychology, San Marino emotion heritage, cultural identity EmotionDeck, empathy and psychology San Marino, Timeless Custodian identity, EmotionDeck emotional culture",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/san-marino",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - San Marino",
    description: "San Marino’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/san-marino",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "San Marino - The Timeless Custodian | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — San Marino (The Timeless Custodian)",
    description: "San Marino’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SanMarinoLayout({ children }) {
  return <>{children}</>;
}

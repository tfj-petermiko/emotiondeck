
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Pitcairn Islands",
  description: "Pitcairn Islands’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Pitcairn Islands, The Horizon Child emotions, Pitcairn Islands culture, empathy and identity Pitcairn, psychology of The Horizon Child, EmotionDeck emotional journey, Pitcairn Islands emotional identity, The Horizon Child psychology, culture and empathy EmotionDeck, emotional psychology Pitcairn Islands, identity and culture The Horizon Child, EmotionDeck empathy exploration",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/pitcairn-islands",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Pitcairn Islands",
    description: "Pitcairn Islands’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/pitcairn-islands",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Pitcairn Islands - The Horizon Child | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Pitcairn Islands (The Horizon Child)",
    description: "Pitcairn Islands’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function PitcairnIslandsLayout({ children }) {
  return <>{children}</>;
}

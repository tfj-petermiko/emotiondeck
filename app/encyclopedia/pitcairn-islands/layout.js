
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Pitcairn Islands",
  description:
    "Explore Pitcairn Islands’s emotional archetype - The Horizon Child. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Pitcairn Islands, Pitcairn Islands archetype, The Horizon Child, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/pitcairn-islands",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Pitcairn Islands",
    description:
      "Journey through Pitcairn Islands’s emotional identity — The Horizon Child, symbolising the nation’s inner psyche and emotional history.",
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
    description:
      "Discover Pitcairn Islands’s emotional essence through the archetype The Horizon Child.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function PitcairnIslandsLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Bermuda",
  description:
    "Explore Bermuda’s emotional archetype - The Coral Guardian. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Bermuda, Bermuda archetype, The Coral Guardian, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/bermuda",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Bermuda",
    description:
      "Journey through Bermuda’s emotional identity — The Coral Guardian, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/bermuda",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Bermuda - The Coral Guardian | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Bermuda (The Coral Guardian)",
    description:
      "Discover Bermuda’s emotional essence through the archetype The Coral Guardian.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function BermudaLayout({ children }) {
  return <>{children}</>;
}

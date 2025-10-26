
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Jordan",
  description:
    "Explore Jordan’s emotional archetype - The Bridge of Light. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Jordan, Jordan archetype, The Bridge of Light, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/jordan",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Jordan",
    description:
      "Journey through Jordan’s emotional identity — The Bridge of Light, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/jordan",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Jordan - The Bridge of Light | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Jordan (The Bridge of Light)",
    description:
      "Discover Jordan’s emotional essence through the archetype The Bridge of Light.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function JordanLayout({ children }) {
  return <>{children}</>;
}

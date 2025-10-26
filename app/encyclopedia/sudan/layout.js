
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Sudan",
  description:
    "Explore Sudan’s emotional archetype - The Guardian of the Nile. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Sudan, Sudan archetype, The Guardian of the Nile, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/sudan",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Sudan",
    description:
      "Journey through Sudan’s emotional identity — The Guardian of the Nile, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/sudan",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Sudan - The Guardian of the Nile | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Sudan (The Guardian of the Nile)",
    description:
      "Discover Sudan’s emotional essence through the archetype The Guardian of the Nile.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SudanLayout({ children }) {
  return <>{children}</>;
}

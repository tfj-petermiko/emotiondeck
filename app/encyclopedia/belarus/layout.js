
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Belarus",
  description:
    "Explore Belarus’s emotional archetype - The Silent Witness. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Belarus, Belarus archetype, The Silent Witness, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/belarus",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Belarus",
    description:
      "Journey through Belarus’s emotional identity — The Silent Witness, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/belarus",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Belarus - The Silent Witness | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Belarus (The Silent Witness)",
    description:
      "Discover Belarus’s emotional essence through the archetype The Silent Witness.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function BelarusLayout({ children }) {
  return <>{children}</>;
}

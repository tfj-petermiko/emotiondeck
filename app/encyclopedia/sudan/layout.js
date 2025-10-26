
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Sudan",
  description: "Sudan's emotional archetype - The Unknown Soul. It embodies deep mystery and hidden strength, reflecting a journey through shadows, resilience, and self-discovery.",
  keywords: "EmotionDeck Sudan emotions, The Guardian of the Nile culture, Sudan empathy psychology, EmotionDeck identity Sudan, Sudan emotional heritage, Guardian of the Nile emotions, psychology of Sudan identity, Sudan culture and emotion, EmotionDeck empathy Sudan, emotional identity Sudan, psychology and emotion Sudan, Guardian of the Nile emotional journey",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/sudan",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Sudan",
    description: "Sudan's emotional archetype - The Unknown Soul. It embodies deep mystery and hidden strength, reflecting a journey through shadows, resilience, and self-discovery.",
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
    description: "Sudan's emotional archetype - The Unknown Soul. It embodies deep mystery and hidden strength, reflecting a journey through shadows, resilience, and self-discovery.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SudanLayout({ children }) {
  return <>{children}</>;
}

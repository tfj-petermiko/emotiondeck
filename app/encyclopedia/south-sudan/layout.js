
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - South Sudan",
  description: "South Sudan's emotional archetype - The Unknown Soul. It embodies profound mystery and uncharted depths, unveiling tales of resilience, longing, and hidden truths.",
  keywords: "EmotionDeck South Sudan, The Flame of Unity emotion, South Sudan culture poetry, empathy in South Sudan identity, psychological emotions South Sudan, Flame of Unity psychology, South Sudan cultural emotion, EmotionDeck empathy culture, identity and emotion South Sudan, South Sudan emotional journey, psychology of unity South Sudan, Flame of Unity emotional landscape",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/south-sudan",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - South Sudan",
    description: "South Sudan's emotional archetype - The Unknown Soul. It embodies profound mystery and uncharted depths, unveiling tales of resilience, longing, and hidden truths.",
    url: "https://emotiondeck.com/encyclopedia/south-sudan",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "South Sudan - The Flame of Unity | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — South Sudan (The Flame of Unity)",
    description: "South Sudan's emotional archetype - The Unknown Soul. It embodies profound mystery and uncharted depths, unveiling tales of resilience, longing, and hidden truths.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SouthSudanLayout({ children }) {
  return <>{children}</>;
}

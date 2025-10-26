
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Northern Mariana Islands",
  description:
    "Explore Northern Mariana Islands’s emotional archetype - The Voice of Dawn. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Northern Mariana Islands, Northern Mariana Islands archetype, The Voice of Dawn, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/northern-mariana-islands",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Northern Mariana Islands",
    description:
      "Journey through Northern Mariana Islands’s emotional identity — The Voice of Dawn, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/northern-mariana-islands",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Northern Mariana Islands - The Voice of Dawn | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Northern Mariana Islands (The Voice of Dawn)",
    description:
      "Discover Northern Mariana Islands’s emotional essence through the archetype The Voice of Dawn.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function NorthernMarianaIslandsLayout({ children }) {
  return <>{children}</>;
}

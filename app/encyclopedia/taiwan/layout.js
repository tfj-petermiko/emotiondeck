
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Taiwan",
  description: "Taiwan’s emotional archetype - The Unknown Soul. It captures hidden depths and unspoken stories, reflecting a journey of identity, resilience, and quiet discovery.",
  keywords: "EmotionDeck Taiwan exploration, The Golden Horizon emotions, Taiwanese culture and empathy, psychology of Taiwan identity, EmotionDeck cultural insights, Golden Horizon emotional journey, Taiwan emotion psychology, cultural empathy in Taiwan, EmotionDeck identity stories, Taiwanese emotional landscapes, The Golden Horizon cultural psyche, EmotionDeck Taiwan identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/taiwan",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Taiwan",
    description: "Taiwan’s emotional archetype - The Unknown Soul. It captures hidden depths and unspoken stories, reflecting a journey of identity, resilience, and quiet discovery.",
    url: "https://emotiondeck.com/encyclopedia/taiwan",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Taiwan - The Golden Horizon | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Taiwan (The Golden Horizon)",
    description: "Taiwan’s emotional archetype - The Unknown Soul. It captures hidden depths and unspoken stories, reflecting a journey of identity, resilience, and quiet discovery.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function TaiwanLayout({ children }) {
  return <>{children}</>;
}

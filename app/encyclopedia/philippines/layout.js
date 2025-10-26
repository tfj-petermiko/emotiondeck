
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Philippines",
  description: "The Philippines' emotional archetype - The Unknown Soul. It whispers of hidden depths and uncharted feelings, inviting reflection on the beauty of mystery and connection.",
  keywords: "EmotionDeck Philippines poetry, The Ocean of Stillness emotion, Filipino culture empathy, psychology of stillness, Philippine identity emotion, EmotionDeck cultural psychology, Ocean of Stillness and empathy, Filipino emotional identity, EmotionDeck psychological insight, Philippines emotional culture, Ocean of Stillness psychology, empathy in Philippine culture",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/philippines",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Philippines",
    description: "The Philippines' emotional archetype - The Unknown Soul. It whispers of hidden depths and uncharted feelings, inviting reflection on the beauty of mystery and connection.",
    url: "https://emotiondeck.com/encyclopedia/philippines",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Philippines - The Ocean of Stillness | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Philippines (The Ocean of Stillness)",
    description: "The Philippines' emotional archetype - The Unknown Soul. It whispers of hidden depths and uncharted feelings, inviting reflection on the beauty of mystery and connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function PhilippinesLayout({ children }) {
  return <>{children}</>;
}

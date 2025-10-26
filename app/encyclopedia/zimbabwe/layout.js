
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Zimbabwe",
  description: "Zimbabwe's emotional archetype - The Unknown Soul. It embodies hidden depths and silent strength, revealing a journey through shadows, dreams, and uncharted hopes.",
  keywords: "EmotionDeck Zimbabwe emotion, Child of Rain empathy, Zimbabwean culture and identity, emotion psychology Zimbabwe, The Child of Rain emotion, Zimbabwe empathy and culture, EmotionDeck identity Zimbabwe, psychology of The Child of Rain, Zimbabwe emotion and culture, empathy in Zimbabwe psychology, EmotionDeck Child of Rain identity, Zimbabwe emotional journey",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/zimbabwe",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Zimbabwe",
    description: "Zimbabwe's emotional archetype - The Unknown Soul. It embodies hidden depths and silent strength, revealing a journey through shadows, dreams, and uncharted hopes.",
    url: "https://emotiondeck.com/encyclopedia/zimbabwe",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Zimbabwe - The Child of Rain | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Zimbabwe (The Child of Rain)",
    description: "Zimbabwe's emotional archetype - The Unknown Soul. It embodies hidden depths and silent strength, revealing a journey through shadows, dreams, and uncharted hopes.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ZimbabweLayout({ children }) {
  return <>{children}</>;
}

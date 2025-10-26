
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Singapore",
  description: "Singapore's emotional archetype - The Unknown Soul. It embodies hidden depths and unspoken dreams, unveiling a tapestry of mystery, longing, and quiet strength.",
  keywords: "EmotionDeck Singapore emotions, The Sky Dreamer empathy, Singapore cultural identity, EmotionDeck psychology insights, Sky Dreamer emotional landscape, Singapore empathy journey, EmotionDeck identity exploration, Sky Dreamer cultural emotions, Singapore psychological depth, EmotionDeck emotional culture, Sky Dreamer identity truths, Singapore empathy psychology",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/singapore",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Singapore",
    description: "Singapore's emotional archetype - The Unknown Soul. It embodies hidden depths and unspoken dreams, unveiling a tapestry of mystery, longing, and quiet strength.",
    url: "https://emotiondeck.com/encyclopedia/singapore",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Singapore - The Sky Dreamer | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Singapore (The Sky Dreamer)",
    description: "Singapore's emotional archetype - The Unknown Soul. It embodies hidden depths and unspoken dreams, unveiling a tapestry of mystery, longing, and quiet strength.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SingaporeLayout({ children }) {
  return <>{children}</>;
}

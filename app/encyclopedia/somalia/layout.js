
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Somalia",
  description: "Somalia's emotional archetype - The Unknown Soul. It embodies haunting mystery and deep yearning, revealing layers of identity, history, and uncharted dreams.",
  keywords: "EmotionDeck Somalia insights, The Silent Flame emotion, Somali culture empathy, emotion psychology Somalia, identity and emotion Somalia, Silent Flame cultural depth, EmotionDeck empathy guide, Somali emotional identity, psychology of Somali flame, cultural emotion Somalia, Silent Flame empathy journey, EmotionDeck identity exploration",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/somalia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Somalia",
    description: "Somalia's emotional archetype - The Unknown Soul. It embodies haunting mystery and deep yearning, revealing layers of identity, history, and uncharted dreams.",
    url: "https://emotiondeck.com/encyclopedia/somalia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Somalia - The Silent Flame | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Somalia (The Silent Flame)",
    description: "Somalia's emotional archetype - The Unknown Soul. It embodies haunting mystery and deep yearning, revealing layers of identity, history, and uncharted dreams.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SomaliaLayout({ children }) {
  return <>{children}</>;
}

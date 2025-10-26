
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - North Korea",
  description: "North Korea's emotional archetype - The Unknown Soul. It reflects haunting depth and veiled longing, revealing a realm of hidden stories and unspoken truths.",
  keywords: "EmotionDeck North Korea emotion, The Soul of Fire identity, North Korea cultural empathy, emotion psychology North Korea, Soul of Fire emotion culture, North Korea emotional identity, EmotionDeck empathy psychology, cultural emotion Soul of Fire, North Korea Soul of Fire psychology, empathy emotion culture, Soul of Fire identity North Korea, psychology emotional empathy",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/north-korea",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - North Korea",
    description: "North Korea's emotional archetype - The Unknown Soul. It reflects haunting depth and veiled longing, revealing a realm of hidden stories and unspoken truths.",
    url: "https://emotiondeck.com/encyclopedia/north-korea",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "North Korea - The Soul of Fire | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — North Korea (The Soul of Fire)",
    description: "North Korea's emotional archetype - The Unknown Soul. It reflects haunting depth and veiled longing, revealing a realm of hidden stories and unspoken truths.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function NorthKoreaLayout({ children }) {
  return <>{children}</>;
}

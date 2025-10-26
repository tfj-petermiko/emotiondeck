
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Romania",
  description: "Romania's emotional archetype - The Unknown Soul. It embodies profound mystery and unspoken depth, unveiling a rich tapestry of introspection, longing, and uncharted emotions.",
  keywords: "EmotionDeck Romania emotions, The Visionary Dreamwalker culture, Romanian empathy journey, emotion psychology Romania, cultural identity EmotionDeck, visionary dreamwalker emotions, Romanian emotional identity, empathy psychology culture, EmotionDeck cultural dreamwalker, psychology of Romanian emotion, empathy and identity Romania, visionary dreamwalker cultural psyche",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/romania",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Romania",
    description: "Romania's emotional archetype - The Unknown Soul. It embodies profound mystery and unspoken depth, unveiling a rich tapestry of introspection, longing, and uncharted emotions.",
    url: "https://emotiondeck.com/encyclopedia/romania",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Romania - The Visionary Dreamwalker | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Romania (The Visionary Dreamwalker)",
    description: "Romania's emotional archetype - The Unknown Soul. It embodies profound mystery and unspoken depth, unveiling a rich tapestry of introspection, longing, and uncharted emotions.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function RomaniaLayout({ children }) {
  return <>{children}</>;
}

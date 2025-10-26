
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Suriname",
  description: "Suriname's emotional archetype - The Unknown Soul. It embodies profound mystery and untold stories, revealing depths of human connection and untamed spirit.",
  keywords: "EmotionDeck Suriname emotions, The Whispering Soul identity, Suriname cultural empathy, EmotionDeck psychology Suriname, The Whispering Soul emotions, Suriname emotional culture, empathy in Suriname identity, EmotionDeck psychological journey, Suriname soulful emotion, The Whispering Soul empathy, cultural identity EmotionDeck, Suriname emotion psychology",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/suriname",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Suriname",
    description: "Suriname's emotional archetype - The Unknown Soul. It embodies profound mystery and untold stories, revealing depths of human connection and untamed spirit.",
    url: "https://emotiondeck.com/encyclopedia/suriname",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Suriname - The Whispering Soul | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Suriname (The Whispering Soul)",
    description: "Suriname's emotional archetype - The Unknown Soul. It embodies profound mystery and untold stories, revealing depths of human connection and untamed spirit.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SurinameLayout({ children }) {
  return <>{children}</>;
}

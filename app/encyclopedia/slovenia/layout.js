
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Slovenia",
  description: "Slovenia's emotional archetype - The Unknown Soul. It embodies profound mystery and hidden depths, inviting contemplation of life’s unseen journeys and connections.",
  keywords: "EmotionDeck Slovenia insights, The Gentle Mediator emotions, Slovenia culture and empathy, Emotional identity Slovenia, Psychology of The Gentle Mediator, EmotionDeck empathy guide, Slovenia emotional harmony, Culture and emotion psychology, Gentle Mediator emotional balance, EmotionDeck cultural identity, Slovenia emotional psychology, Empathy and identity Slovenia",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/slovenia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Slovenia",
    description: "Slovenia's emotional archetype - The Unknown Soul. It embodies profound mystery and hidden depths, inviting contemplation of life’s unseen journeys and connections.",
    url: "https://emotiondeck.com/encyclopedia/slovenia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Slovenia - The Gentle Mediator | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Slovenia (The Gentle Mediator)",
    description: "Slovenia's emotional archetype - The Unknown Soul. It embodies profound mystery and hidden depths, inviting contemplation of life’s unseen journeys and connections.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SloveniaLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Chad",
  description:
    "Explore Chad’s emotional archetype - The Mirror of Earth. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Chad, Chad archetype, The Mirror of Earth, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/chad",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Chad",
    description:
      "Journey through Chad’s emotional identity — The Mirror of Earth, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/chad",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Chad - The Mirror of Earth | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Chad (The Mirror of Earth)",
    description:
      "Discover Chad’s emotional essence through the archetype The Mirror of Earth.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ChadLayout({ children }) {
  return <>{children}</>;
}

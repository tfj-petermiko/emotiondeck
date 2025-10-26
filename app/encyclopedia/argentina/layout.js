
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Argentina",
  description:
    "Explore Argentina’s emotional archetype - The Keeper of Earth. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Argentina, Argentina archetype, The Keeper of Earth, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/argentina",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Argentina",
    description:
      "Journey through Argentina’s emotional identity — The Keeper of Earth, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/argentina",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Argentina - The Keeper of Earth | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Argentina (The Keeper of Earth)",
    description:
      "Discover Argentina’s emotional essence through the archetype The Keeper of Earth.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ArgentinaLayout({ children }) {
  return <>{children}</>;
}

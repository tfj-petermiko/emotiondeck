
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Marshall Islands",
  description:
    "Explore Marshall Islands’s emotional archetype - The Soul Voyager. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Marshall Islands, Marshall Islands archetype, The Soul Voyager, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/marshall-islands",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Marshall Islands",
    description:
      "Journey through Marshall Islands’s emotional identity — The Soul Voyager, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/marshall-islands",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Marshall Islands - The Soul Voyager | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Marshall Islands (The Soul Voyager)",
    description:
      "Discover Marshall Islands’s emotional essence through the archetype The Soul Voyager.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MarshallIslandsLayout({ children }) {
  return <>{children}</>;
}

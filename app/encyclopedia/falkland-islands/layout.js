
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Falkland Islands",
  description:
    "Explore Falkland Islands’s emotional archetype - The Windborn Guardian. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Falkland Islands, Falkland Islands archetype, The Windborn Guardian, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/falkland-islands",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Falkland Islands",
    description:
      "Journey through Falkland Islands’s emotional identity — The Windborn Guardian, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/falkland-islands",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Falkland Islands - The Windborn Guardian | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Falkland Islands (The Windborn Guardian)",
    description:
      "Discover Falkland Islands’s emotional essence through the archetype The Windborn Guardian.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function FalklandIslandsLayout({ children }) {
  return <>{children}</>;
}

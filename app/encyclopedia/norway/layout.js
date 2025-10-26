
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Norway",
  description:
    "Explore Norway’s emotional archetype - The Silent Seeker. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Norway, Norway archetype, The Silent Seeker, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/norway",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Norway",
    description:
      "Journey through Norway’s emotional identity — The Silent Seeker, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/norway",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Norway - The Silent Seeker | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Norway (The Silent Seeker)",
    description:
      "Discover Norway’s emotional essence through the archetype The Silent Seeker.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function NorwayLayout({ children }) {
  return <>{children}</>;
}

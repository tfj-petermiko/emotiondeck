
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Isle of Man",
  description:
    "Explore Isle of Man’s emotional archetype - The Keeper of Tides. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Isle of Man, Isle of Man archetype, The Keeper of Tides, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/isle-of-man",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Isle of Man",
    description:
      "Journey through Isle of Man’s emotional identity — The Keeper of Tides, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/isle-of-man",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Isle of Man - The Keeper of Tides | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Isle of Man (The Keeper of Tides)",
    description:
      "Discover Isle of Man’s emotional essence through the archetype The Keeper of Tides.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function IsleofManLayout({ children }) {
  return <>{children}</>;
}

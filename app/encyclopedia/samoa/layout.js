
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Samoa",
  description:
    "Explore Samoa’s emotional archetype - The Keeper of Tides. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Samoa, Samoa archetype, The Keeper of Tides, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/samoa",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Samoa",
    description:
      "Journey through Samoa’s emotional identity — The Keeper of Tides, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/samoa",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Samoa - The Keeper of Tides | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Samoa (The Keeper of Tides)",
    description:
      "Discover Samoa’s emotional essence through the archetype The Keeper of Tides.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SamoaLayout({ children }) {
  return <>{children}</>;
}

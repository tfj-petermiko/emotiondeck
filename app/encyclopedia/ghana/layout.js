
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Ghana",
  description:
    "Explore Ghana’s emotional archetype - The Keeper of Rhythm. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Ghana, Ghana archetype, The Keeper of Rhythm, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/ghana",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Ghana",
    description:
      "Journey through Ghana’s emotional identity — The Keeper of Rhythm, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/ghana",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/ghana_preview.webp",
        width: 1200,
        height: 630,
        alt: "Ghana - The Keeper of Rhythm | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Ghana (The Keeper of Rhythm)",
    description:
      "Discover Ghana’s emotional essence through the archetype The Keeper of Rhythm.",
    images: ["/private_images/encyclopedia/countries/ghana_preview.webp"],
  },
};

export default function GhanaLayout({ children }) {
  return <>{children}</>;
}

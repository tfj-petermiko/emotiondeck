
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - North Macedonia",
  description:
    "Explore North Macedonia’s emotional archetype - The Keeper of Echoes. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck North Macedonia, North Macedonia archetype, The Keeper of Echoes, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/north-macedonia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - North Macedonia",
    description:
      "Journey through North Macedonia’s emotional identity — The Keeper of Echoes, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/north-macedonia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/north_macedonia_preview.webp",
        width: 1200,
        height: 630,
        alt: "North Macedonia - The Keeper of Echoes | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — North Macedonia (The Keeper of Echoes)",
    description:
      "Discover North Macedonia’s emotional essence through the archetype The Keeper of Echoes.",
    images: ["/private_images/encyclopedia/countries/north_macedonia_preview.webp"],
  },
};

export default function NorthMacedoniaLayout({ children }) {
  return <>{children}</>;
}

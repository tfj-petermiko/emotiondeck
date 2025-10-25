
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Andorra",
  description:
    "Explore Andorra’s emotional archetype - The Mountain Guardian. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Andorra, Andorra archetype, The Mountain Guardian, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/andorra",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Andorra",
    description:
      "Journey through Andorra’s emotional identity — The Mountain Guardian, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/andorra",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/andorra_preview.webp",
        width: 1200,
        height: 630,
        alt: "Andorra - The Mountain Guardian | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Andorra (The Mountain Guardian)",
    description:
      "Discover Andorra’s emotional essence through the archetype The Mountain Guardian.",
    images: ["/private_images/encyclopedia/countries/andorra_preview.webp"],
  },
};

export default function AndorraLayout({ children }) {
  return <>{children}</>;
}

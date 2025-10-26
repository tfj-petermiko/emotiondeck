
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Mauritania",
  description:
    "Explore Mauritania’s emotional archetype - The Desert Compass. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Mauritania, Mauritania archetype, The Desert Compass, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/mauritania",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Mauritania",
    description:
      "Journey through Mauritania’s emotional identity — The Desert Compass, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/mauritania",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Mauritania - The Desert Compass | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Mauritania (The Desert Compass)",
    description:
      "Discover Mauritania’s emotional essence through the archetype The Desert Compass.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MauritaniaLayout({ children }) {
  return <>{children}</>;
}

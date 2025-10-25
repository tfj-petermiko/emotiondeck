
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Uzbekistan",
  description:
    "Explore Uzbekistan’s emotional archetype - The Guardian of Dust. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Uzbekistan, Uzbekistan archetype, The Guardian of Dust, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/uzbekistan",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Uzbekistan",
    description:
      "Journey through Uzbekistan’s emotional identity — The Guardian of Dust, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/uzbekistan",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/uzbekistan_preview.webp",
        width: 1200,
        height: 630,
        alt: "Uzbekistan - The Guardian of Dust | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Uzbekistan (The Guardian of Dust)",
    description:
      "Discover Uzbekistan’s emotional essence through the archetype The Guardian of Dust.",
    images: ["/private_images/encyclopedia/countries/uzbekistan_preview.webp"],
  },
};

export default function UzbekistanLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Faroe Islands",
  description:
    "Explore Faroe Islands’s emotional archetype - The Storm Whisperer. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Faroe Islands, Faroe Islands archetype, The Storm Whisperer, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/faroe-islands",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Faroe Islands",
    description:
      "Journey through Faroe Islands’s emotional identity — The Storm Whisperer, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/faroe-islands",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/faroe_islands_preview.webp",
        width: 1200,
        height: 630,
        alt: "Faroe Islands - The Storm Whisperer | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Faroe Islands (The Storm Whisperer)",
    description:
      "Discover Faroe Islands’s emotional essence through the archetype The Storm Whisperer.",
    images: ["/private_images/encyclopedia/countries/faroe_islands_preview.webp"],
  },
};

export default function FaroeIslandsLayout({ children }) {
  return <>{children}</>;
}

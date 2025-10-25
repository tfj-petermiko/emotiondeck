
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Democratic Republic of the Congo",
  description:
    "Explore Democratic Republic of the Congo’s emotional archetype - The Forest Guardian. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Democratic Republic of the Congo, Democratic Republic of the Congo archetype, The Forest Guardian, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/democratic-republic-of-the-congo",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Democratic Republic of the Congo",
    description:
      "Journey through Democratic Republic of the Congo’s emotional identity — The Forest Guardian, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/democratic-republic-of-the-congo",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/democratic_republic_of_the_congo_preview.webp",
        width: 1200,
        height: 630,
        alt: "Democratic Republic of the Congo - The Forest Guardian | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Democratic Republic of the Congo (The Forest Guardian)",
    description:
      "Discover Democratic Republic of the Congo’s emotional essence through the archetype The Forest Guardian.",
    images: ["/private_images/encyclopedia/countries/democratic_republic_of_the_congo_preview.webp"],
  },
};

export default function DemocraticRepublicoftheCongoLayout({ children }) {
  return <>{children}</>;
}

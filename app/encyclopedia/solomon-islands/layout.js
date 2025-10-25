
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Solomon Islands",
  description:
    "Explore Solomon Islands’s emotional archetype - The Inner Ocean. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Solomon Islands, Solomon Islands archetype, The Inner Ocean, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/solomon-islands",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Solomon Islands",
    description:
      "Journey through Solomon Islands’s emotional identity — The Inner Ocean, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/solomon-islands",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/solomon_islands_preview.webp",
        width: 1200,
        height: 630,
        alt: "Solomon Islands - The Inner Ocean | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Solomon Islands (The Inner Ocean)",
    description:
      "Discover Solomon Islands’s emotional essence through the archetype The Inner Ocean.",
    images: ["/private_images/encyclopedia/countries/solomon_islands_preview.webp"],
  },
};

export default function SolomonIslandsLayout({ children }) {
  return <>{children}</>;
}

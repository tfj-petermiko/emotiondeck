
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Slovakia",
  description:
    "Explore Slovakia’s emotional archetype - The Loyal Heart. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Slovakia, Slovakia archetype, The Loyal Heart, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/slovakia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Slovakia",
    description:
      "Journey through Slovakia’s emotional identity — The Loyal Heart, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/slovakia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/slovakia_preview.webp",
        width: 1200,
        height: 630,
        alt: "Slovakia - The Loyal Heart | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Slovakia (The Loyal Heart)",
    description:
      "Discover Slovakia’s emotional essence through the archetype The Loyal Heart.",
    images: ["/private_images/encyclopedia/countries/slovakia_preview.webp"],
  },
};

export default function SlovakiaLayout({ children }) {
  return <>{children}</>;
}

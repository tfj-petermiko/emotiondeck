
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Vatican City",
  description:
    "Explore Vatican City’s emotional archetype - The Spiritual Mirror. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Vatican City, Vatican City archetype, The Spiritual Mirror, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/vatican-city",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Vatican City",
    description:
      "Journey through Vatican City’s emotional identity — The Spiritual Mirror, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/vatican-city",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/vatican_city_preview.webp",
        width: 1200,
        height: 630,
        alt: "Vatican City - The Spiritual Mirror | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Vatican City (The Spiritual Mirror)",
    description:
      "Discover Vatican City’s emotional essence through the archetype The Spiritual Mirror.",
    images: ["/private_images/encyclopedia/countries/vatican_city_preview.webp"],
  },
};

export default function VaticanCityLayout({ children }) {
  return <>{children}</>;
}

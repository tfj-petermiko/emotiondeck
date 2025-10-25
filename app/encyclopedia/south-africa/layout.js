
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - South Africa",
  description:
    "Explore South Africa’s emotional archetype - The Compassionate Warrior. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck South Africa, South Africa archetype, The Compassionate Warrior, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/south-africa",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - South Africa",
    description:
      "Journey through South Africa’s emotional identity — The Compassionate Warrior, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/south-africa",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/south_africa_preview.webp",
        width: 1200,
        height: 630,
        alt: "South Africa - The Compassionate Warrior | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — South Africa (The Compassionate Warrior)",
    description:
      "Discover South Africa’s emotional essence through the archetype The Compassionate Warrior.",
    images: ["/private_images/encyclopedia/countries/south_africa_preview.webp"],
  },
};

export default function SouthAfricaLayout({ children }) {
  return <>{children}</>;
}

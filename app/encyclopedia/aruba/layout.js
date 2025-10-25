
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Aruba",
  description:
    "Explore Aruba’s emotional archetype - The Phoenix of Tide. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Aruba, Aruba archetype, The Phoenix of Tide, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/aruba",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Aruba",
    description:
      "Journey through Aruba’s emotional identity — The Phoenix of Tide, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/aruba",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/aruba_preview.webp",
        width: 1200,
        height: 630,
        alt: "Aruba - The Phoenix of Tide | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Aruba (The Phoenix of Tide)",
    description:
      "Discover Aruba’s emotional essence through the archetype The Phoenix of Tide.",
    images: ["/private_images/encyclopedia/countries/aruba_preview.webp"],
  },
};

export default function ArubaLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Burundi",
  description:
    "Explore Burundi’s emotional archetype - The Mirror of Soil. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Burundi, Burundi archetype, The Mirror of Soil, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/burundi",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Burundi",
    description:
      "Journey through Burundi’s emotional identity — The Mirror of Soil, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/burundi",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/burundi_preview.webp",
        width: 1200,
        height: 630,
        alt: "Burundi - The Mirror of Soil | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Burundi (The Mirror of Soil)",
    description:
      "Discover Burundi’s emotional essence through the archetype The Mirror of Soil.",
    images: ["/private_images/encyclopedia/countries/burundi_preview.webp"],
  },
};

export default function BurundiLayout({ children }) {
  return <>{children}</>;
}

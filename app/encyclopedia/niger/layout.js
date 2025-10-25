
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Niger",
  description:
    "Explore Niger’s emotional archetype - The Wandering Heart. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Niger, Niger archetype, The Wandering Heart, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/niger",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Niger",
    description:
      "Journey through Niger’s emotional identity — The Wandering Heart, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/niger",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/niger_preview.webp",
        width: 1200,
        height: 630,
        alt: "Niger - The Wandering Heart | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Niger (The Wandering Heart)",
    description:
      "Discover Niger’s emotional essence through the archetype The Wandering Heart.",
    images: ["/private_images/encyclopedia/countries/niger_preview.webp"],
  },
};

export default function NigerLayout({ children }) {
  return <>{children}</>;
}

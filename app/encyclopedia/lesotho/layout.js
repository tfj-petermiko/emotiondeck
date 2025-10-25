
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Lesotho",
  description:
    "Explore Lesotho’s emotional archetype - The Silent Star. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Lesotho, Lesotho archetype, The Silent Star, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/lesotho",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Lesotho",
    description:
      "Journey through Lesotho’s emotional identity — The Silent Star, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/lesotho",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/lesotho_preview.webp",
        width: 1200,
        height: 630,
        alt: "Lesotho - The Silent Star | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Lesotho (The Silent Star)",
    description:
      "Discover Lesotho’s emotional essence through the archetype The Silent Star.",
    images: ["/private_images/encyclopedia/countries/lesotho_preview.webp"],
  },
};

export default function LesothoLayout({ children }) {
  return <>{children}</>;
}

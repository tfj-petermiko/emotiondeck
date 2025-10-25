
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Macau",
  description:
    "Explore Macau’s emotional archetype - The Dream of Fortune. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Macau, Macau archetype, The Dream of Fortune, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/macau",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Macau",
    description:
      "Journey through Macau’s emotional identity — The Dream of Fortune, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/macau",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/macau_preview.webp",
        width: 1200,
        height: 630,
        alt: "Macau - The Dream of Fortune | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Macau (The Dream of Fortune)",
    description:
      "Discover Macau’s emotional essence through the archetype The Dream of Fortune.",
    images: ["/private_images/encyclopedia/countries/macau_preview.webp"],
  },
};

export default function MacauLayout({ children }) {
  return <>{children}</>;
}

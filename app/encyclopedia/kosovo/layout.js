
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Kosovo",
  description:
    "Explore Kosovo’s emotional archetype - The Resilient Frontier. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Kosovo, Kosovo archetype, The Resilient Frontier, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/kosovo",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Kosovo",
    description:
      "Journey through Kosovo’s emotional identity — The Resilient Frontier, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/kosovo",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/kosovo_preview.webp",
        width: 1200,
        height: 630,
        alt: "Kosovo - The Resilient Frontier | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Kosovo (The Resilient Frontier)",
    description:
      "Discover Kosovo’s emotional essence through the archetype The Resilient Frontier.",
    images: ["/private_images/encyclopedia/countries/kosovo_preview.webp"],
  },
};

export default function KosovoLayout({ children }) {
  return <>{children}</>;
}

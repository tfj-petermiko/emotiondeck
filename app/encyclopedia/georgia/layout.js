
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Georgia",
  description:
    "Explore Georgia’s emotional archetype - The Voice of Memory. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Georgia, Georgia archetype, The Voice of Memory, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/georgia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Georgia",
    description:
      "Journey through Georgia’s emotional identity — The Voice of Memory, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/georgia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/georgia_preview.webp",
        width: 1200,
        height: 630,
        alt: "Georgia - The Voice of Memory | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Georgia (The Voice of Memory)",
    description:
      "Discover Georgia’s emotional essence through the archetype The Voice of Memory.",
    images: ["/private_images/encyclopedia/countries/georgia_preview.webp"],
  },
};

export default function GeorgiaLayout({ children }) {
  return <>{children}</>;
}

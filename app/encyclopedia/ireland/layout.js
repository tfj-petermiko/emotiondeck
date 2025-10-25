
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Ireland",
  description:
    "Explore Ireland’s emotional archetype - The Poet of Memory. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Ireland, Ireland archetype, The Poet of Memory, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/ireland",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Ireland",
    description:
      "Journey through Ireland’s emotional identity — The Poet of Memory, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/ireland",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/ireland_preview.webp",
        width: 1200,
        height: 630,
        alt: "Ireland - The Poet of Memory | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Ireland (The Poet of Memory)",
    description:
      "Discover Ireland’s emotional essence through the archetype The Poet of Memory.",
    images: ["/private_images/encyclopedia/countries/ireland_preview.webp"],
  },
};

export default function IrelandLayout({ children }) {
  return <>{children}</>;
}

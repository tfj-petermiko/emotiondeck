
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Japan",
  description:
    "Explore Japan’s emotional archetype - The Silent Creator. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Japan, Japan archetype, The Silent Creator, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/japan",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Japan",
    description:
      "Journey through Japan’s emotional identity — The Silent Creator, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/japan",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/japan_preview.webp",
        width: 1200,
        height: 630,
        alt: "Japan - The Silent Creator | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Japan (The Silent Creator)",
    description:
      "Discover Japan’s emotional essence through the archetype The Silent Creator.",
    images: ["/private_images/encyclopedia/countries/japan_preview.webp"],
  },
};

export default function JapanLayout({ children }) {
  return <>{children}</>;
}

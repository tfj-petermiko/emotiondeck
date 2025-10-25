
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Tibet",
  description:
    "Explore Tibet’s emotional archetype - The Sacred Mountain. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Tibet, Tibet archetype, The Sacred Mountain, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/tibet",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Tibet",
    description:
      "Journey through Tibet’s emotional identity — The Sacred Mountain, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/tibet",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/tibet_preview.webp",
        width: 1200,
        height: 630,
        alt: "Tibet - The Sacred Mountain | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Tibet (The Sacred Mountain)",
    description:
      "Discover Tibet’s emotional essence through the archetype The Sacred Mountain.",
    images: ["/private_images/encyclopedia/countries/tibet_preview.webp"],
  },
};

export default function TibetLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - North Korea",
  description:
    "Explore North Korea’s emotional archetype - The Soul of Fire. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck North Korea, North Korea archetype, The Soul of Fire, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/north-korea",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - North Korea",
    description:
      "Journey through North Korea’s emotional identity — The Soul of Fire, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/north-korea",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "North Korea - The Soul of Fire | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — North Korea (The Soul of Fire)",
    description:
      "Discover North Korea’s emotional essence through the archetype The Soul of Fire.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function NorthKoreaLayout({ children }) {
  return <>{children}</>;
}

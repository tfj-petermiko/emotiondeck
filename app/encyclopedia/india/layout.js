
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - India",
  description:
    "Explore India’s emotional archetype - The Eternal Lotus. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck India, India archetype, The Eternal Lotus, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/india",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - India",
    description:
      "Journey through India’s emotional identity — The Eternal Lotus, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/india",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "India - The Eternal Lotus | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — India (The Eternal Lotus)",
    description:
      "Discover India’s emotional essence through the archetype The Eternal Lotus.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function IndiaLayout({ children }) {
  return <>{children}</>;
}

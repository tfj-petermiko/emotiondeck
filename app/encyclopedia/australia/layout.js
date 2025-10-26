
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Australia",
  description:
    "Explore Australia’s emotional archetype - The Ocean Dreamer. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Australia, Australia archetype, The Ocean Dreamer, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/australia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Australia",
    description:
      "Journey through Australia’s emotional identity — The Ocean Dreamer, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/australia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Australia - The Ocean Dreamer | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Australia (The Ocean Dreamer)",
    description:
      "Discover Australia’s emotional essence through the archetype The Ocean Dreamer.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function AustraliaLayout({ children }) {
  return <>{children}</>;
}

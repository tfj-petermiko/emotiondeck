
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Romania",
  description:
    "Explore Romania’s emotional archetype - The Visionary Dreamwalker. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Romania, Romania archetype, The Visionary Dreamwalker, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/romania",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Romania",
    description:
      "Journey through Romania’s emotional identity — The Visionary Dreamwalker, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/romania",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Romania - The Visionary Dreamwalker | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Romania (The Visionary Dreamwalker)",
    description:
      "Discover Romania’s emotional essence through the archetype The Visionary Dreamwalker.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function RomaniaLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Croatia",
  description:
    "Explore Croatia’s emotional archetype - The Resilient Voyager. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Croatia, Croatia archetype, The Resilient Voyager, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/croatia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Croatia",
    description:
      "Journey through Croatia’s emotional identity — The Resilient Voyager, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/croatia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Croatia - The Resilient Voyager | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Croatia (The Resilient Voyager)",
    description:
      "Discover Croatia’s emotional essence through the archetype The Resilient Voyager.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function CroatiaLayout({ children }) {
  return <>{children}</>;
}

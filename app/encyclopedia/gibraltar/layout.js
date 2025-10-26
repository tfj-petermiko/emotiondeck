
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Gibraltar",
  description:
    "Explore Gibraltar’s emotional archetype - The Sentinel Between Worlds. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Gibraltar, Gibraltar archetype, The Sentinel Between Worlds, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/gibraltar",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Gibraltar",
    description:
      "Journey through Gibraltar’s emotional identity — The Sentinel Between Worlds, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/gibraltar",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Gibraltar - The Sentinel Between Worlds | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Gibraltar (The Sentinel Between Worlds)",
    description:
      "Discover Gibraltar’s emotional essence through the archetype The Sentinel Between Worlds.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function GibraltarLayout({ children }) {
  return <>{children}</>;
}

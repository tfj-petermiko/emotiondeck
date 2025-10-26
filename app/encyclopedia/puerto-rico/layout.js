
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Puerto Rico",
  description:
    "Explore Puerto Rico’s emotional archetype - The Memory of Light. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Puerto Rico, Puerto Rico archetype, The Memory of Light, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/puerto-rico",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Puerto Rico",
    description:
      "Journey through Puerto Rico’s emotional identity — The Memory of Light, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/puerto-rico",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Puerto Rico - The Memory of Light | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Puerto Rico (The Memory of Light)",
    description:
      "Discover Puerto Rico’s emotional essence through the archetype The Memory of Light.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function PuertoRicoLayout({ children }) {
  return <>{children}</>;
}

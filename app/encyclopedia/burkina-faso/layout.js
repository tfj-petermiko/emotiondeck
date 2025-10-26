
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Burkina Faso",
  description:
    "Explore Burkina Faso’s emotional archetype - The Compassionate Nomad. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Burkina Faso, Burkina Faso archetype, The Compassionate Nomad, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/burkina-faso",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Burkina Faso",
    description:
      "Journey through Burkina Faso’s emotional identity — The Compassionate Nomad, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/burkina-faso",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Burkina Faso - The Compassionate Nomad | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Burkina Faso (The Compassionate Nomad)",
    description:
      "Discover Burkina Faso’s emotional essence through the archetype The Compassionate Nomad.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function BurkinaFasoLayout({ children }) {
  return <>{children}</>;
}

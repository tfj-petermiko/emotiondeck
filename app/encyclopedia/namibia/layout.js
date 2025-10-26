
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Namibia",
  description:
    "Explore Namibia’s emotional archetype - The Eternal Horizon. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Namibia, Namibia archetype, The Eternal Horizon, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/namibia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Namibia",
    description:
      "Journey through Namibia’s emotional identity — The Eternal Horizon, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/namibia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Namibia - The Eternal Horizon | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Namibia (The Eternal Horizon)",
    description:
      "Discover Namibia’s emotional essence through the archetype The Eternal Horizon.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function NamibiaLayout({ children }) {
  return <>{children}</>;
}

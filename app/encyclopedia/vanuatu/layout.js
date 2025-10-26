
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Vanuatu",
  description:
    "Explore Vanuatu’s emotional archetype - The Silent Horizon. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Vanuatu, Vanuatu archetype, The Silent Horizon, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/vanuatu",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Vanuatu",
    description:
      "Journey through Vanuatu’s emotional identity — The Silent Horizon, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/vanuatu",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Vanuatu - The Silent Horizon | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Vanuatu (The Silent Horizon)",
    description:
      "Discover Vanuatu’s emotional essence through the archetype The Silent Horizon.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function VanuatuLayout({ children }) {
  return <>{children}</>;
}

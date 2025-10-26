
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Tonga",
  description:
    "Explore Tonga’s emotional archetype - The Song of the Sea. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Tonga, Tonga archetype, The Song of the Sea, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/tonga",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Tonga",
    description:
      "Journey through Tonga’s emotional identity — The Song of the Sea, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/tonga",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Tonga - The Song of the Sea | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Tonga (The Song of the Sea)",
    description:
      "Discover Tonga’s emotional essence through the archetype The Song of the Sea.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function TongaLayout({ children }) {
  return <>{children}</>;
}

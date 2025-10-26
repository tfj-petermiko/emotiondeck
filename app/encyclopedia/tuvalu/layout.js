
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Tuvalu",
  description:
    "Explore Tuvalu’s emotional archetype - The Spirit of Coral. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Tuvalu, Tuvalu archetype, The Spirit of Coral, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/tuvalu",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Tuvalu",
    description:
      "Journey through Tuvalu’s emotional identity — The Spirit of Coral, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/tuvalu",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Tuvalu - The Spirit of Coral | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Tuvalu (The Spirit of Coral)",
    description:
      "Discover Tuvalu’s emotional essence through the archetype The Spirit of Coral.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function TuvaluLayout({ children }) {
  return <>{children}</>;
}

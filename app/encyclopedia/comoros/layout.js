
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Comoros",
  description:
    "Explore Comoros’s emotional archetype - The Ocean Memory. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Comoros, Comoros archetype, The Ocean Memory, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/comoros",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Comoros",
    description:
      "Journey through Comoros’s emotional identity — The Ocean Memory, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/comoros",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Comoros - The Ocean Memory | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Comoros (The Ocean Memory)",
    description:
      "Discover Comoros’s emotional essence through the archetype The Ocean Memory.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ComorosLayout({ children }) {
  return <>{children}</>;
}

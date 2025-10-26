
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Vietnam",
  description:
    "Explore Vietnam’s emotional archetype - The Spirit of Flow. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Vietnam, Vietnam archetype, The Spirit of Flow, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/vietnam",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Vietnam",
    description:
      "Journey through Vietnam’s emotional identity — The Spirit of Flow, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/vietnam",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Vietnam - The Spirit of Flow | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Vietnam (The Spirit of Flow)",
    description:
      "Discover Vietnam’s emotional essence through the archetype The Spirit of Flow.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function VietnamLayout({ children }) {
  return <>{children}</>;
}

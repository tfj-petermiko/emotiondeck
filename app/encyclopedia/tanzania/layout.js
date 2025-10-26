
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Tanzania",
  description:
    "Explore Tanzania’s emotional archetype - The Sacred Voice. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Tanzania, Tanzania archetype, The Sacred Voice, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/tanzania",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Tanzania",
    description:
      "Journey through Tanzania’s emotional identity — The Sacred Voice, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/tanzania",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Tanzania - The Sacred Voice | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Tanzania (The Sacred Voice)",
    description:
      "Discover Tanzania’s emotional essence through the archetype The Sacred Voice.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function TanzaniaLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Bahamas",
  description:
    "Explore Bahamas’s emotional archetype - The Keeper of Coral. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Bahamas, Bahamas archetype, The Keeper of Coral, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/bahamas",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Bahamas",
    description:
      "Journey through Bahamas’s emotional identity — The Keeper of Coral, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/bahamas",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Bahamas - The Keeper of Coral | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Bahamas (The Keeper of Coral)",
    description:
      "Discover Bahamas’s emotional essence through the archetype The Keeper of Coral.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function BahamasLayout({ children }) {
  return <>{children}</>;
}

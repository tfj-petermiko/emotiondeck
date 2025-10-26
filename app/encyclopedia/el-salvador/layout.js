export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - El Salvador",
  description:
    "Explore El Salvador’s emotional archetype - The Redeemed Flame. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck El Salvador, El Salvador archetype, The Redeemed Flame, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/el-salvador",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - El Salvador",
    description:
      "Journey through El Salvador’s emotional identity — The Redeemed Flame, symbolising the nation’s spirit of endurance, transformation, and renewal.",
    url: "https://emotiondeck.com/encyclopedia/el-salvador",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "El Salvador - The Redeemed Flame | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — El Salvador (The Redeemed Flame)",
    description:
      "Discover El Salvador’s emotional essence through the archetype The Redeemed Flame — a symbol of endurance and rebirth.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ElSalvadorLayout({ children }) {
  return <>{children}</>;
}

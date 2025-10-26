
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Guatemala",
  description:
    "Explore Guatemala’s emotional archetype - The Child of Storm. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Guatemala, Guatemala archetype, The Child of Storm, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/guatemala",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Guatemala",
    description:
      "Journey through Guatemala’s emotional identity — The Child of Storm, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/guatemala",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Guatemala - The Child of Storm | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Guatemala (The Child of Storm)",
    description:
      "Discover Guatemala’s emotional essence through the archetype The Child of Storm.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function GuatemalaLayout({ children }) {
  return <>{children}</>;
}

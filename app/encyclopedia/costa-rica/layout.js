
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Costa Rica",
  description:
    "Explore Costa Rica’s emotional archetype - The Phoenix of Sea. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Costa Rica, Costa Rica archetype, The Phoenix of Sea, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/costa-rica",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Costa Rica",
    description:
      "Journey through Costa Rica’s emotional identity — The Phoenix of Sea, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/costa-rica",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Costa Rica - The Phoenix of Sea | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Costa Rica (The Phoenix of Sea)",
    description:
      "Discover Costa Rica’s emotional essence through the archetype The Phoenix of Sea.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function CostaRicaLayout({ children }) {
  return <>{children}</>;
}

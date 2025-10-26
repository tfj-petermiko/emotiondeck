
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Laos",
  description:
    "Explore Laos’s emotional archetype - The Dreaming Monk. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Laos, Laos archetype, The Dreaming Monk, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/laos",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Laos",
    description:
      "Journey through Laos’s emotional identity — The Dreaming Monk, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/laos",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Laos - The Dreaming Monk | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Laos (The Dreaming Monk)",
    description:
      "Discover Laos’s emotional essence through the archetype The Dreaming Monk.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function LaosLayout({ children }) {
  return <>{children}</>;
}

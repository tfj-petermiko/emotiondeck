
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Liechtenstein",
  description:
    "Explore Liechtenstein’s emotional archetype - The Serene Watcher. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Liechtenstein, Liechtenstein archetype, The Serene Watcher, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/liechtenstein",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Liechtenstein",
    description:
      "Journey through Liechtenstein’s emotional identity — The Serene Watcher, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/liechtenstein",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Liechtenstein - The Serene Watcher | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Liechtenstein (The Serene Watcher)",
    description:
      "Discover Liechtenstein’s emotional essence through the archetype The Serene Watcher.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function LiechtensteinLayout({ children }) {
  return <>{children}</>;
}

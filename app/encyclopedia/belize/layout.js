
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Belize",
  description:
    "Explore Belize’s emotional archetype - The Silent Watcher. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Belize, Belize archetype, The Silent Watcher, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/belize",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Belize",
    description:
      "Journey through Belize’s emotional identity — The Silent Watcher, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/belize",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Belize - The Silent Watcher | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Belize (The Silent Watcher)",
    description:
      "Discover Belize’s emotional essence through the archetype The Silent Watcher.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function BelizeLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Bhutan",
  description:
    "Explore Bhutan’s emotional archetype - The Soul of Dawn. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Bhutan, Bhutan archetype, The Soul of Dawn, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/bhutan",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Bhutan",
    description:
      "Journey through Bhutan’s emotional identity — The Soul of Dawn, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/bhutan",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Bhutan - The Soul of Dawn | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Bhutan (The Soul of Dawn)",
    description:
      "Discover Bhutan’s emotional essence through the archetype The Soul of Dawn.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function BhutanLayout({ children }) {
  return <>{children}</>;
}

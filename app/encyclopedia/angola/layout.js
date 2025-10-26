
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Angola",
  description:
    "Explore Angola’s emotional archetype - The Whispering Flame. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Angola, Angola archetype, The Whispering Flame, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/angola",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Angola",
    description:
      "Journey through Angola’s emotional identity — The Whispering Flame, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/angola",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Angola - The Whispering Flame | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Angola (The Whispering Flame)",
    description:
      "Discover Angola’s emotional essence through the archetype The Whispering Flame.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function AngolaLayout({ children }) {
  return <>{children}</>;
}

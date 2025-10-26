
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Kuwait",
  description:
    "Explore Kuwait’s emotional archetype - The Dream of Dawn. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Kuwait, Kuwait archetype, The Dream of Dawn, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/kuwait",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Kuwait",
    description:
      "Journey through Kuwait’s emotional identity — The Dream of Dawn, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/kuwait",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Kuwait - The Dream of Dawn | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Kuwait (The Dream of Dawn)",
    description:
      "Discover Kuwait’s emotional essence through the archetype The Dream of Dawn.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function KuwaitLayout({ children }) {
  return <>{children}</>;
}

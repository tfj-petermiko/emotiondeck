
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Turkey",
  description:
    "Explore Turkey’s emotional archetype - The Bridge of Empires. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Turkey, Turkey archetype, The Bridge of Empires, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/turkey",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Turkey",
    description:
      "Journey through Turkey’s emotional identity — The Bridge of Empires, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/turkey",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Turkey - The Bridge of Empires | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Turkey (The Bridge of Empires)",
    description:
      "Discover Turkey’s emotional essence through the archetype The Bridge of Empires.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function TurkeyLayout({ children }) {
  return <>{children}</>;
}

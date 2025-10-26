
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Yemen",
  description:
    "Explore Yemen’s emotional archetype - The Desert Child. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Yemen, Yemen archetype, The Desert Child, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/yemen",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Yemen",
    description:
      "Journey through Yemen’s emotional identity — The Desert Child, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/yemen",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Yemen - The Desert Child | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Yemen (The Desert Child)",
    description:
      "Discover Yemen’s emotional essence through the archetype The Desert Child.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function YemenLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Zambia",
  description:
    "Explore Zambia’s emotional archetype - The Dream Child. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Zambia, Zambia archetype, The Dream Child, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/zambia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Zambia",
    description:
      "Journey through Zambia’s emotional identity — The Dream Child, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/zambia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Zambia - The Dream Child | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Zambia (The Dream Child)",
    description:
      "Discover Zambia’s emotional essence through the archetype The Dream Child.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ZambiaLayout({ children }) {
  return <>{children}</>;
}

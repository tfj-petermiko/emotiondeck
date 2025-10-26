
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Israel",
  description:
    "Explore Israel’s emotional archetype - The Rising Vision. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Israel, Israel archetype, The Rising Vision, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/israel",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Israel",
    description:
      "Journey through Israel’s emotional identity — The Rising Vision, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/israel",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Israel - The Rising Vision | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Israel (The Rising Vision)",
    description:
      "Discover Israel’s emotional essence through the archetype The Rising Vision.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function IsraelLayout({ children }) {
  return <>{children}</>;
}

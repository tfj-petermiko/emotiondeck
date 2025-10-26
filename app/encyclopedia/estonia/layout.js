
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Estonia",
  description:
    "Explore Estonia’s emotional archetype - The Digital Sage. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Estonia, Estonia archetype, The Digital Sage, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/estonia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Estonia",
    description:
      "Journey through Estonia’s emotional identity — The Digital Sage, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/estonia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Estonia - The Digital Sage | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Estonia (The Digital Sage)",
    description:
      "Discover Estonia’s emotional essence through the archetype The Digital Sage.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function EstoniaLayout({ children }) {
  return <>{children}</>;
}

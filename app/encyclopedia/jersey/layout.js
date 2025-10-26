
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Jersey",
  description:
    "Explore Jersey’s emotional archetype - The Island Sentinel. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Jersey, Jersey archetype, The Island Sentinel, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/jersey",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Jersey",
    description:
      "Journey through Jersey’s emotional identity — The Island Sentinel, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/jersey",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Jersey - The Island Sentinel | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Jersey (The Island Sentinel)",
    description:
      "Discover Jersey’s emotional essence through the archetype The Island Sentinel.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function JerseyLayout({ children }) {
  return <>{children}</>;
}

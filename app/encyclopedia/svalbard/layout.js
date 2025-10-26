
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Svalbard",
  description:
    "Explore Svalbard’s emotional archetype - The Arctic Keeper. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Svalbard, Svalbard archetype, The Arctic Keeper, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/svalbard",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Svalbard",
    description:
      "Journey through Svalbard’s emotional identity — The Arctic Keeper, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/svalbard",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Svalbard - The Arctic Keeper | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Svalbard (The Arctic Keeper)",
    description:
      "Discover Svalbard’s emotional essence through the archetype The Arctic Keeper.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SvalbardLayout({ children }) {
  return <>{children}</>;
}

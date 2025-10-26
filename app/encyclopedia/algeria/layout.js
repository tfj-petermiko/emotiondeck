
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Algeria",
  description:
    "Explore Algeria’s emotional archetype - The Wise Nomad. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Algeria, Algeria archetype, The Wise Nomad, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/algeria",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Algeria",
    description:
      "Journey through Algeria’s emotional identity — The Wise Nomad, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/algeria",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Algeria - The Wise Nomad | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Algeria (The Wise Nomad)",
    description:
      "Discover Algeria’s emotional essence through the archetype The Wise Nomad.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function AlgeriaLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Nunavut",
  description:
    "Explore Nunavut’s emotional archetype - The Spirit of North. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Nunavut, Nunavut archetype, The Spirit of North, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/nunavut",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Nunavut",
    description:
      "Journey through Nunavut’s emotional identity — The Spirit of North, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/nunavut",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Nunavut - The Spirit of North | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Nunavut (The Spirit of North)",
    description:
      "Discover Nunavut’s emotional essence through the archetype The Spirit of North.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function NunavutLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Singapore",
  description:
    "Explore Singapore’s emotional archetype - The Sky Dreamer. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Singapore, Singapore archetype, The Sky Dreamer, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/singapore",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Singapore",
    description:
      "Journey through Singapore’s emotional identity — The Sky Dreamer, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/singapore",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Singapore - The Sky Dreamer | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Singapore (The Sky Dreamer)",
    description:
      "Discover Singapore’s emotional essence through the archetype The Sky Dreamer.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SingaporeLayout({ children }) {
  return <>{children}</>;
}

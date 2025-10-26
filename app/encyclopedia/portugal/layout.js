
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Portugal",
  description:
    "Explore Portugal’s emotional archetype - The Dreaming Navigator. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Portugal, Portugal archetype, The Dreaming Navigator, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/portugal",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Portugal",
    description:
      "Journey through Portugal’s emotional identity — The Dreaming Navigator, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/portugal",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Portugal - The Dreaming Navigator | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Portugal (The Dreaming Navigator)",
    description:
      "Discover Portugal’s emotional essence through the archetype The Dreaming Navigator.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function PortugalLayout({ children }) {
  return <>{children}</>;
}

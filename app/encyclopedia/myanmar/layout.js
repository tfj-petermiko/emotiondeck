
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Myanmar",
  description:
    "Explore Myanmar’s emotional archetype - The Whisper of Rain. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Myanmar, Myanmar archetype, The Whisper of Rain, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/myanmar",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Myanmar",
    description:
      "Journey through Myanmar’s emotional identity — The Whisper of Rain, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/myanmar",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/myanmar_preview.webp",
        width: 1200,
        height: 630,
        alt: "Myanmar - The Whisper of Rain | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Myanmar (The Whisper of Rain)",
    description:
      "Discover Myanmar’s emotional essence through the archetype The Whisper of Rain.",
    images: ["/private_images/encyclopedia/countries/myanmar_preview.webp"],
  },
};

export default function MyanmarLayout({ children }) {
  return <>{children}</>;
}

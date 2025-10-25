
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Brunei",
  description:
    "Explore Brunei’s emotional archetype - The Whisper of Gold. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Brunei, Brunei archetype, The Whisper of Gold, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/brunei",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Brunei",
    description:
      "Journey through Brunei’s emotional identity — The Whisper of Gold, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/brunei",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/brunei_preview.webp",
        width: 1200,
        height: 630,
        alt: "Brunei - The Whisper of Gold | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Brunei (The Whisper of Gold)",
    description:
      "Discover Brunei’s emotional essence through the archetype The Whisper of Gold.",
    images: ["/private_images/encyclopedia/countries/brunei_preview.webp"],
  },
};

export default function BruneiLayout({ children }) {
  return <>{children}</>;
}

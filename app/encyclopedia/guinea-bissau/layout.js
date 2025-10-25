export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Guinea-Bissau",
  description:
    "Explore Guinea-Bissau’s emotional archetype - The Whisper of Hope. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Guinea-Bissau, Guinea-Bissau archetype, The Whisper of Hope, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/guinea-bissau",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Guinea-Bissau",
    description:
      "Journey through Guinea-Bissau’s emotional identity — The Whisper of Hope, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/guinea-bissau",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/guinea-bissau_preview.webp",
        width: 1200,
        height: 630,
        alt: "Guinea-Bissau - The Whisper of Hope | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Guinea-Bissau (The Whisper of Hope)",
    description:
      "Discover Guinea-Bissau’s emotional essence through the archetype The Whisper of Hope.",
    images: ["/private_images/encyclopedia/countries/guinea-bissau_preview.webp"],
  },
};

export default function GuineaBissauLayout({ children }) {
  return <>{children}</>;
}

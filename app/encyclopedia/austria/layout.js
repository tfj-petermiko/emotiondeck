
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Austria",
  description:
    "Explore Austria’s emotional archetype - The Melancholic Maestro. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Austria, Austria archetype, The Melancholic Maestro, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/austria",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Austria",
    description:
      "Journey through Austria’s emotional identity — The Melancholic Maestro, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/austria",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Austria - The Melancholic Maestro | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Austria (The Melancholic Maestro)",
    description:
      "Discover Austria’s emotional essence through the archetype The Melancholic Maestro.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function AustriaLayout({ children }) {
  return <>{children}</>;
}

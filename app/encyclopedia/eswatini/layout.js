
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Eswatini",
  description:
    "Explore Eswatini’s emotional archetype - The Mountain of Hearts. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Eswatini, Eswatini archetype, The Mountain of Hearts, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/eswatini",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Eswatini",
    description:
      "Journey through Eswatini’s emotional identity — The Mountain of Hearts, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/eswatini",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/eswatini_preview.webp",
        width: 1200,
        height: 630,
        alt: "Eswatini - The Mountain of Hearts | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Eswatini (The Mountain of Hearts)",
    description:
      "Discover Eswatini’s emotional essence through the archetype The Mountain of Hearts.",
    images: ["/private_images/encyclopedia/countries/eswatini_preview.webp"],
  },
};

export default function EswatiniLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Niue",
  description:
    "Explore Niue’s emotional archetype - The Spirit of Shells. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Niue, Niue archetype, The Spirit of Shells, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/niue",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Niue",
    description:
      "Journey through Niue’s emotional identity — The Spirit of Shells, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/niue",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/niue_preview.webp",
        width: 1200,
        height: 630,
        alt: "Niue - The Spirit of Shells | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Niue (The Spirit of Shells)",
    description:
      "Discover Niue’s emotional essence through the archetype The Spirit of Shells.",
    images: ["/private_images/encyclopedia/countries/niue_preview.webp"],
  },
};

export default function NiueLayout({ children }) {
  return <>{children}</>;
}

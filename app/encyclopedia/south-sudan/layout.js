
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - South Sudan",
  description:
    "Explore South Sudan’s emotional archetype - The Flame of Unity. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck South Sudan, South Sudan archetype, The Flame of Unity, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/south-sudan",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - South Sudan",
    description:
      "Journey through South Sudan’s emotional identity — The Flame of Unity, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/south-sudan",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/south_sudan_preview.webp",
        width: 1200,
        height: 630,
        alt: "South Sudan - The Flame of Unity | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — South Sudan (The Flame of Unity)",
    description:
      "Discover South Sudan’s emotional essence through the archetype The Flame of Unity.",
    images: ["/private_images/encyclopedia/countries/south_sudan_preview.webp"],
  },
};

export default function SouthSudanLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Morocco",
  description:
    "Explore Morocco’s emotional archetype - The Desert Dreamer. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Morocco, Morocco archetype, The Desert Dreamer, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/morocco",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Morocco",
    description:
      "Journey through Morocco’s emotional identity — The Desert Dreamer, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/morocco",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/morocco_preview.webp",
        width: 1200,
        height: 630,
        alt: "Morocco - The Desert Dreamer | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Morocco (The Desert Dreamer)",
    description:
      "Discover Morocco’s emotional essence through the archetype The Desert Dreamer.",
    images: ["/private_images/encyclopedia/countries/morocco_preview.webp"],
  },
};

export default function MoroccoLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Guadeloupe",
  description:
    "Explore Guadeloupe’s emotional archetype - The Dream of Sea. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Guadeloupe, Guadeloupe archetype, The Dream of Sea, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/guadeloupe",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Guadeloupe",
    description:
      "Journey through Guadeloupe’s emotional identity — The Dream of Sea, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/guadeloupe",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/guadeloupe_preview.webp",
        width: 1200,
        height: 630,
        alt: "Guadeloupe - The Dream of Sea | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Guadeloupe (The Dream of Sea)",
    description:
      "Discover Guadeloupe’s emotional essence through the archetype The Dream of Sea.",
    images: ["/private_images/encyclopedia/countries/guadeloupe_preview.webp"],
  },
};

export default function GuadeloupeLayout({ children }) {
  return <>{children}</>;
}

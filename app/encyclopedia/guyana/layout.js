
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Guyana",
  description:
    "Explore Guyana’s emotional archetype - The Golden Shaman. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Guyana, Guyana archetype, The Golden Shaman, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/guyana",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Guyana",
    description:
      "Journey through Guyana’s emotional identity — The Golden Shaman, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/guyana",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/guyana_preview.webp",
        width: 1200,
        height: 630,
        alt: "Guyana - The Golden Shaman | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Guyana (The Golden Shaman)",
    description:
      "Discover Guyana’s emotional essence through the archetype The Golden Shaman.",
    images: ["/private_images/encyclopedia/countries/guyana_preview.webp"],
  },
};

export default function GuyanaLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Cambodia",
  description:
    "Explore Cambodia’s emotional archetype - The Gentle Flame. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Cambodia, Cambodia archetype, The Gentle Flame, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/cambodia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Cambodia",
    description:
      "Journey through Cambodia’s emotional identity — The Gentle Flame, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/cambodia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/cambodia_preview.webp",
        width: 1200,
        height: 630,
        alt: "Cambodia - The Gentle Flame | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Cambodia (The Gentle Flame)",
    description:
      "Discover Cambodia’s emotional essence through the archetype The Gentle Flame.",
    images: ["/private_images/encyclopedia/countries/cambodia_preview.webp"],
  },
};

export default function CambodiaLayout({ children }) {
  return <>{children}</>;
}

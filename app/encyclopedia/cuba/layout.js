
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Cuba",
  description:
    "Explore Cuba’s emotional archetype - The Sacred Flame. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Cuba, Cuba archetype, The Sacred Flame, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/cuba",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Cuba",
    description:
      "Journey through Cuba’s emotional identity — The Sacred Flame, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/cuba",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/cuba_preview.webp",
        width: 1200,
        height: 630,
        alt: "Cuba - The Sacred Flame | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Cuba (The Sacred Flame)",
    description:
      "Discover Cuba’s emotional essence through the archetype The Sacred Flame.",
    images: ["/private_images/encyclopedia/countries/cuba_preview.webp"],
  },
};

export default function CubaLayout({ children }) {
  return <>{children}</>;
}

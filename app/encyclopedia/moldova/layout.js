
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Moldova",
  description:
    "Explore Moldova’s emotional archetype - The Humble Healer. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Moldova, Moldova archetype, The Humble Healer, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/moldova",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Moldova",
    description:
      "Journey through Moldova’s emotional identity — The Humble Healer, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/moldova",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/moldova_preview.webp",
        width: 1200,
        height: 630,
        alt: "Moldova - The Humble Healer | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Moldova (The Humble Healer)",
    description:
      "Discover Moldova’s emotional essence through the archetype The Humble Healer.",
    images: ["/private_images/encyclopedia/countries/moldova_preview.webp"],
  },
};

export default function MoldovaLayout({ children }) {
  return <>{children}</>;
}

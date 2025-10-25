
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Belgium",
  description:
    "Explore Belgium’s emotional archetype - The Dual Soul. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Belgium, Belgium archetype, The Dual Soul, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/belgium",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Belgium",
    description:
      "Journey through Belgium’s emotional identity — The Dual Soul, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/belgium",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/belgium_preview.webp",
        width: 1200,
        height: 630,
        alt: "Belgium - The Dual Soul | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Belgium (The Dual Soul)",
    description:
      "Discover Belgium’s emotional essence through the archetype The Dual Soul.",
    images: ["/private_images/encyclopedia/countries/belgium_preview.webp"],
  },
};

export default function BelgiumLayout({ children }) {
  return <>{children}</>;
}

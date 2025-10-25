
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Cyprus",
  description:
    "Explore Cyprus’s emotional archetype - The Island of Longing. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Cyprus, Cyprus archetype, The Island of Longing, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/cyprus",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Cyprus",
    description:
      "Journey through Cyprus’s emotional identity — The Island of Longing, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/cyprus",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/cyprus_preview.webp",
        width: 1200,
        height: 630,
        alt: "Cyprus - The Island of Longing | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Cyprus (The Island of Longing)",
    description:
      "Discover Cyprus’s emotional essence through the archetype The Island of Longing.",
    images: ["/private_images/encyclopedia/countries/cyprus_preview.webp"],
  },
};

export default function CyprusLayout({ children }) {
  return <>{children}</>;
}

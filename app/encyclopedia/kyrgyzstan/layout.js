
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Kyrgyzstan",
  description:
    "Explore Kyrgyzstan’s emotional archetype - The Keeper of Snow. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Kyrgyzstan, Kyrgyzstan archetype, The Keeper of Snow, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/kyrgyzstan",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Kyrgyzstan",
    description:
      "Journey through Kyrgyzstan’s emotional identity — The Keeper of Snow, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/kyrgyzstan",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/kyrgyzstan_preview.webp",
        width: 1200,
        height: 630,
        alt: "Kyrgyzstan - The Keeper of Snow | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Kyrgyzstan (The Keeper of Snow)",
    description:
      "Discover Kyrgyzstan’s emotional essence through the archetype The Keeper of Snow.",
    images: ["/private_images/encyclopedia/countries/kyrgyzstan_preview.webp"],
  },
};

export default function KyrgyzstanLayout({ children }) {
  return <>{children}</>;
}

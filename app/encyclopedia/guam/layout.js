
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Guam",
  description:
    "Explore Guam’s emotional archetype - The Coral Keeper. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Guam, Guam archetype, The Coral Keeper, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/guam",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Guam",
    description:
      "Journey through Guam’s emotional identity — The Coral Keeper, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/guam",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/guam_preview.webp",
        width: 1200,
        height: 630,
        alt: "Guam - The Coral Keeper | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Guam (The Coral Keeper)",
    description:
      "Discover Guam’s emotional essence through the archetype The Coral Keeper.",
    images: ["/private_images/encyclopedia/countries/guam_preview.webp"],
  },
};

export default function GuamLayout({ children }) {
  return <>{children}</>;
}

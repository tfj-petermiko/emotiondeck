
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Mexico",
  description:
    "Explore Mexico’s emotional archetype - The Timeless Storyteller. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Mexico, Mexico archetype, The Timeless Storyteller, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/mexico",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Mexico",
    description:
      "Journey through Mexico’s emotional identity — The Timeless Storyteller, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/mexico",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/mexico_preview.webp",
        width: 1200,
        height: 630,
        alt: "Mexico - The Timeless Storyteller | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Mexico (The Timeless Storyteller)",
    description:
      "Discover Mexico’s emotional essence through the archetype The Timeless Storyteller.",
    images: ["/private_images/encyclopedia/countries/mexico_preview.webp"],
  },
};

export default function MexicoLayout({ children }) {
  return <>{children}</>;
}

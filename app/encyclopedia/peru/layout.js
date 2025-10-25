
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Peru",
  description:
    "Explore Peru’s emotional archetype - The Soul of Andes. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Peru, Peru archetype, The Soul of Andes, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/peru",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Peru",
    description:
      "Journey through Peru’s emotional identity — The Soul of Andes, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/peru",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/peru_preview.webp",
        width: 1200,
        height: 630,
        alt: "Peru - The Soul of Andes | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Peru (The Soul of Andes)",
    description:
      "Discover Peru’s emotional essence through the archetype The Soul of Andes.",
    images: ["/private_images/encyclopedia/countries/peru_preview.webp"],
  },
};

export default function PeruLayout({ children }) {
  return <>{children}</>;
}

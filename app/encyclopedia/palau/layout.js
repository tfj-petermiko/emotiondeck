
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Palau",
  description:
    "Explore Palau’s emotional archetype - The Dreaming Shell. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Palau, Palau archetype, The Dreaming Shell, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/palau",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Palau",
    description:
      "Journey through Palau’s emotional identity — The Dreaming Shell, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/palau",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/palau_preview.webp",
        width: 1200,
        height: 630,
        alt: "Palau - The Dreaming Shell | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Palau (The Dreaming Shell)",
    description:
      "Discover Palau’s emotional essence through the archetype The Dreaming Shell.",
    images: ["/private_images/encyclopedia/countries/palau_preview.webp"],
  },
};

export default function PalauLayout({ children }) {
  return <>{children}</>;
}

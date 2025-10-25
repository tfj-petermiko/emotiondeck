
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Somalia",
  description:
    "Explore Somalia’s emotional archetype - The Silent Flame. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Somalia, Somalia archetype, The Silent Flame, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/somalia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Somalia",
    description:
      "Journey through Somalia’s emotional identity — The Silent Flame, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/somalia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/somalia_preview.webp",
        width: 1200,
        height: 630,
        alt: "Somalia - The Silent Flame | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Somalia (The Silent Flame)",
    description:
      "Discover Somalia’s emotional essence through the archetype The Silent Flame.",
    images: ["/private_images/encyclopedia/countries/somalia_preview.webp"],
  },
};

export default function SomaliaLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Saint Martin",
  description:
    "Explore Saint Martin’s emotional archetype - The Child of Sun. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Saint Martin, Saint Martin archetype, The Child of Sun, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/saint-martin",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Saint Martin",
    description:
      "Journey through Saint Martin’s emotional identity — The Child of Sun, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/saint-martin",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/saint_martin_preview.webp",
        width: 1200,
        height: 630,
        alt: "Saint Martin - The Child of Sun | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Saint Martin (The Child of Sun)",
    description:
      "Discover Saint Martin’s emotional essence through the archetype The Child of Sun.",
    images: ["/private_images/encyclopedia/countries/saint_martin_preview.webp"],
  },
};

export default function SaintMartinLayout({ children }) {
  return <>{children}</>;
}

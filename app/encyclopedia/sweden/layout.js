
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Sweden",
  description:
    "Explore Sweden’s emotional archetype - The Harmoniser. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Sweden, Sweden archetype, The Harmoniser, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/sweden",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Sweden",
    description:
      "Journey through Sweden’s emotional identity — The Harmoniser, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/sweden",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/sweden_preview.webp",
        width: 1200,
        height: 630,
        alt: "Sweden - The Harmoniser | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Sweden (The Harmoniser)",
    description:
      "Discover Sweden’s emotional essence through the archetype The Harmoniser.",
    images: ["/private_images/encyclopedia/countries/sweden_preview.webp"],
  },
};

export default function SwedenLayout({ children }) {
  return <>{children}</>;
}

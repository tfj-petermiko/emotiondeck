
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Micronesia",
  description:
    "Explore Micronesia’s emotional archetype - The Voice of Light. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Micronesia, Micronesia archetype, The Voice of Light, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/micronesia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Micronesia",
    description:
      "Journey through Micronesia’s emotional identity — The Voice of Light, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/micronesia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/micronesia_preview.webp",
        width: 1200,
        height: 630,
        alt: "Micronesia - The Voice of Light | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Micronesia (The Voice of Light)",
    description:
      "Discover Micronesia’s emotional essence through the archetype The Voice of Light.",
    images: ["/private_images/encyclopedia/countries/micronesia_preview.webp"],
  },
};

export default function MicronesiaLayout({ children }) {
  return <>{children}</>;
}

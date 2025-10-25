
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Seychelles",
  description:
    "Explore Seychelles’s emotional archetype - The Song of Light. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Seychelles, Seychelles archetype, The Song of Light, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/seychelles",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Seychelles",
    description:
      "Journey through Seychelles’s emotional identity — The Song of Light, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/seychelles",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/seychelles_preview.webp",
        width: 1200,
        height: 630,
        alt: "Seychelles - The Song of Light | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Seychelles (The Song of Light)",
    description:
      "Discover Seychelles’s emotional essence through the archetype The Song of Light.",
    images: ["/private_images/encyclopedia/countries/seychelles_preview.webp"],
  },
};

export default function SeychellesLayout({ children }) {
  return <>{children}</>;
}

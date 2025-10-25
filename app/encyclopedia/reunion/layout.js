
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Reunion",
  description:
    "Explore Reunion’s emotional archetype - The Ocean Memory. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Reunion, Reunion archetype, The Ocean Memory, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/reunion",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Reunion",
    description:
      "Journey through Reunion’s emotional identity — The Ocean Memory, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/reunion",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/reunion_preview.webp",
        width: 1200,
        height: 630,
        alt: "Reunion - The Ocean Memory | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Reunion (The Ocean Memory)",
    description:
      "Discover Reunion’s emotional essence through the archetype The Ocean Memory.",
    images: ["/private_images/encyclopedia/countries/reunion_preview.webp"],
  },
};

export default function ReunionLayout({ children }) {
  return <>{children}</>;
}

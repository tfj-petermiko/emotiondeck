
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Panama",
  description:
    "Explore Panama’s emotional archetype - The Guardian of Rain. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Panama, Panama archetype, The Guardian of Rain, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/panama",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Panama",
    description:
      "Journey through Panama’s emotional identity — The Guardian of Rain, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/panama",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/panama_preview.webp",
        width: 1200,
        height: 630,
        alt: "Panama - The Guardian of Rain | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Panama (The Guardian of Rain)",
    description:
      "Discover Panama’s emotional essence through the archetype The Guardian of Rain.",
    images: ["/private_images/encyclopedia/countries/panama_preview.webp"],
  },
};

export default function PanamaLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Czechia",
  description:
    "Explore Czechia’s emotional archetype - The Iron Dreamer. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Czechia, Czechia archetype, The Iron Dreamer, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/czechia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Czechia",
    description:
      "Journey through Czechia’s emotional identity — The Iron Dreamer, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/czechia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/czechia_preview.webp",
        width: 1200,
        height: 630,
        alt: "Czechia - The Iron Dreamer | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Czechia (The Iron Dreamer)",
    description:
      "Discover Czechia’s emotional essence through the archetype The Iron Dreamer.",
    images: ["/private_images/encyclopedia/countries/czechia_preview.webp"],
  },
};

export default function CzechiaLayout({ children }) {
  return <>{children}</>;
}

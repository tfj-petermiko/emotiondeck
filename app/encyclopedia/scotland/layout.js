
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Scotland",
  description:
    "Explore Scotland’s emotional archetype - The Guardian of Spirit. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Scotland, Scotland archetype, The Guardian of Spirit, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/scotland",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Scotland",
    description:
      "Journey through Scotland’s emotional identity — The Guardian of Spirit, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/scotland",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/scotland_preview.webp",
        width: 1200,
        height: 630,
        alt: "Scotland - The Guardian of Spirit | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Scotland (The Guardian of Spirit)",
    description:
      "Discover Scotland’s emotional essence through the archetype The Guardian of Spirit.",
    images: ["/private_images/encyclopedia/countries/scotland_preview.webp"],
  },
};

export default function ScotlandLayout({ children }) {
  return <>{children}</>;
}

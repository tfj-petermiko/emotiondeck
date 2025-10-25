
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Mongolia",
  description:
    "Explore Mongolia’s emotional archetype - The Reflective Nomad. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Mongolia, Mongolia archetype, The Reflective Nomad, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/mongolia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Mongolia",
    description:
      "Journey through Mongolia’s emotional identity — The Reflective Nomad, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/mongolia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/mongolia_preview.webp",
        width: 1200,
        height: 630,
        alt: "Mongolia - The Reflective Nomad | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Mongolia (The Reflective Nomad)",
    description:
      "Discover Mongolia’s emotional essence through the archetype The Reflective Nomad.",
    images: ["/private_images/encyclopedia/countries/mongolia_preview.webp"],
  },
};

export default function MongoliaLayout({ children }) {
  return <>{children}</>;
}

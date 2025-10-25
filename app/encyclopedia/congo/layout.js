
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Congo",
  description:
    "Explore Congo’s emotional archetype - The Eternal Drum. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Congo, Congo archetype, The Eternal Drum, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/congo",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Congo",
    description:
      "Journey through Congo’s emotional identity — The Eternal Drum, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/congo",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/congo_preview.webp",
        width: 1200,
        height: 630,
        alt: "Congo - The Eternal Drum | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Congo (The Eternal Drum)",
    description:
      "Discover Congo’s emotional essence through the archetype The Eternal Drum.",
    images: ["/private_images/encyclopedia/countries/congo_preview.webp"],
  },
};

export default function CongoLayout({ children }) {
  return <>{children}</>;
}

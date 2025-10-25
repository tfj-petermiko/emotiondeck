
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Turkmenistan",
  description:
    "Explore Turkmenistan’s emotional archetype - The Timeless Mirror. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Turkmenistan, Turkmenistan archetype, The Timeless Mirror, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/turkmenistan",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Turkmenistan",
    description:
      "Journey through Turkmenistan’s emotional identity — The Timeless Mirror, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/turkmenistan",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/turkmenistan_preview.webp",
        width: 1200,
        height: 630,
        alt: "Turkmenistan - The Timeless Mirror | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Turkmenistan (The Timeless Mirror)",
    description:
      "Discover Turkmenistan’s emotional essence through the archetype The Timeless Mirror.",
    images: ["/private_images/encyclopedia/countries/turkmenistan_preview.webp"],
  },
};

export default function TurkmenistanLayout({ children }) {
  return <>{children}</>;
}

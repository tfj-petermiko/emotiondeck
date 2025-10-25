
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Suriname",
  description:
    "Explore Suriname’s emotional archetype - The Whispering Soul. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Suriname, Suriname archetype, The Whispering Soul, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/suriname",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Suriname",
    description:
      "Journey through Suriname’s emotional identity — The Whispering Soul, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/suriname",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/suriname_preview.webp",
        width: 1200,
        height: 630,
        alt: "Suriname - The Whispering Soul | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Suriname (The Whispering Soul)",
    description:
      "Discover Suriname’s emotional essence through the archetype The Whispering Soul.",
    images: ["/private_images/encyclopedia/countries/suriname_preview.webp"],
  },
};

export default function SurinameLayout({ children }) {
  return <>{children}</>;
}

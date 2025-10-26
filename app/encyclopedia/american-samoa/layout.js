
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - American Samoa",
  description:
    "Explore American Samoa’s emotional archetype - The Timeless Wave. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck American Samoa, American Samoa archetype, The Timeless Wave, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/american-samoa",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - American Samoa",
    description:
      "Journey through American Samoa’s emotional identity — The Timeless Wave, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/american-samoa",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "American Samoa - The Timeless Wave | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — American Samoa (The Timeless Wave)",
    description:
      "Discover American Samoa’s emotional essence through the archetype The Timeless Wave.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function AmericanSamoaLayout({ children }) {
  return <>{children}</>;
}

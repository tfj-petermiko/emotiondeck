
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Guinea",
  description:
    "Explore Guinea’s emotional archetype - The Song of Roots. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Guinea, Guinea archetype, The Song of Roots, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/guinea",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Guinea",
    description:
      "Journey through Guinea’s emotional identity — The Song of Roots, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/guinea",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/guinea_preview.webp",
        width: 1200,
        height: 630,
        alt: "Guinea - The Song of Roots | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Guinea (The Song of Roots)",
    description:
      "Discover Guinea’s emotional essence through the archetype The Song of Roots.",
    images: ["/private_images/encyclopedia/countries/guinea_preview.webp"],
  },
};

export default function GuineaLayout({ children }) {
  return <>{children}</>;
}

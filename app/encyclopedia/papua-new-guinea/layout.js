
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Papua New Guinea",
  description:
    "Explore Papua New Guinea’s emotional archetype - The Guardian of Roots. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Papua New Guinea, Papua New Guinea archetype, The Guardian of Roots, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/papua-new-guinea",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Papua New Guinea",
    description:
      "Journey through Papua New Guinea’s emotional identity — The Guardian of Roots, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/papua-new-guinea",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Papua New Guinea - The Guardian of Roots | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Papua New Guinea (The Guardian of Roots)",
    description:
      "Discover Papua New Guinea’s emotional essence through the archetype The Guardian of Roots.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function PapuaNewGuineaLayout({ children }) {
  return <>{children}</>;
}

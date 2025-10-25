
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Equatorial Guinea",
  description:
    "Explore Equatorial Guinea’s emotional archetype - The Forgotten Song. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Equatorial Guinea, Equatorial Guinea archetype, The Forgotten Song, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/equatorial-guinea",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Equatorial Guinea",
    description:
      "Journey through Equatorial Guinea’s emotional identity — The Forgotten Song, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/equatorial-guinea",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/equatorial_guinea_preview.webp",
        width: 1200,
        height: 630,
        alt: "Equatorial Guinea - The Forgotten Song | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Equatorial Guinea (The Forgotten Song)",
    description:
      "Discover Equatorial Guinea’s emotional essence through the archetype The Forgotten Song.",
    images: ["/private_images/encyclopedia/countries/equatorial_guinea_preview.webp"],
  },
};

export default function EquatorialGuineaLayout({ children }) {
  return <>{children}</>;
}

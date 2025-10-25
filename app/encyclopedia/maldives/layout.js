
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Maldives",
  description:
    "Explore Maldives’s emotional archetype - The Island of Serenity. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Maldives, Maldives archetype, The Island of Serenity, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/maldives",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Maldives",
    description:
      "Journey through Maldives’s emotional identity — The Island of Serenity, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/maldives",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/maldives_preview.webp",
        width: 1200,
        height: 630,
        alt: "Maldives - The Island of Serenity | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Maldives (The Island of Serenity)",
    description:
      "Discover Maldives’s emotional essence through the archetype The Island of Serenity.",
    images: ["/private_images/encyclopedia/countries/maldives_preview.webp"],
  },
};

export default function MaldivesLayout({ children }) {
  return <>{children}</>;
}

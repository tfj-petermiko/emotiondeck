
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Cameroon",
  description:
    "Explore Cameroon’s emotional archetype - The Keeper of Rain. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Cameroon, Cameroon archetype, The Keeper of Rain, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/cameroon",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Cameroon",
    description:
      "Journey through Cameroon’s emotional identity — The Keeper of Rain, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/cameroon",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/cameroon_preview.webp",
        width: 1200,
        height: 630,
        alt: "Cameroon - The Keeper of Rain | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Cameroon (The Keeper of Rain)",
    description:
      "Discover Cameroon’s emotional essence through the archetype The Keeper of Rain.",
    images: ["/private_images/encyclopedia/countries/cameroon_preview.webp"],
  },
};

export default function CameroonLayout({ children }) {
  return <>{children}</>;
}

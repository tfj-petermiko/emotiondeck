
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Brazil",
  description:
    "Explore Brazil’s emotional archetype - The Dreaming Jaguar. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Brazil, Brazil archetype, The Dreaming Jaguar, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/brazil",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Brazil",
    description:
      "Journey through Brazil’s emotional identity — The Dreaming Jaguar, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/brazil",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/brazil_preview.webp",
        width: 1200,
        height: 630,
        alt: "Brazil - The Dreaming Jaguar | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Brazil (The Dreaming Jaguar)",
    description:
      "Discover Brazil’s emotional essence through the archetype The Dreaming Jaguar.",
    images: ["/private_images/encyclopedia/countries/brazil_preview.webp"],
  },
};

export default function BrazilLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Sao Tome and Principe",
  description:
    "Explore Sao Tome and Principe’s emotional archetype - The Twin Horizon. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Sao Tome and Principe, Sao Tome and Principe archetype, The Twin Horizon, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/sao-tome-and-principe",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Sao Tome and Principe",
    description:
      "Journey through Sao Tome and Principe’s emotional identity — The Twin Horizon, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/sao-tome-and-principe",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/sao_tome_and_principe_preview.webp",
        width: 1200,
        height: 630,
        alt: "Sao Tome and Principe - The Twin Horizon | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Sao Tome and Principe (The Twin Horizon)",
    description:
      "Discover Sao Tome and Principe’s emotional essence through the archetype The Twin Horizon.",
    images: ["/private_images/encyclopedia/countries/sao_tome_and_principe_preview.webp"],
  },
};

export default function SaoTomeandPrincipeLayout({ children }) {
  return <>{children}</>;
}

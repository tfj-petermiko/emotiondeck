
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - South Korea",
  description:
    "Explore South Korea’s emotional archetype - The Keeper of Serenity. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck South Korea, South Korea archetype, The Keeper of Serenity, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/south-korea",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - South Korea",
    description:
      "Journey through South Korea’s emotional identity — The Keeper of Serenity, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/south-korea",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/south_korea_preview.webp",
        width: 1200,
        height: 630,
        alt: "South Korea - The Keeper of Serenity | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — South Korea (The Keeper of Serenity)",
    description:
      "Discover South Korea’s emotional essence through the archetype The Keeper of Serenity.",
    images: ["/private_images/encyclopedia/countries/south_korea_preview.webp"],
  },
};

export default function SouthKoreaLayout({ children }) {
  return <>{children}</>;
}

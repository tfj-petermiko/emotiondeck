
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Philippines",
  description:
    "Explore Philippines’s emotional archetype - The Ocean of Stillness. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Philippines, Philippines archetype, The Ocean of Stillness, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/philippines",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Philippines",
    description:
      "Journey through Philippines’s emotional identity — The Ocean of Stillness, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/philippines",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/philippines_preview.webp",
        width: 1200,
        height: 630,
        alt: "Philippines - The Ocean of Stillness | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Philippines (The Ocean of Stillness)",
    description:
      "Discover Philippines’s emotional essence through the archetype The Ocean of Stillness.",
    images: ["/private_images/encyclopedia/countries/philippines_preview.webp"],
  },
};

export default function PhilippinesLayout({ children }) {
  return <>{children}</>;
}

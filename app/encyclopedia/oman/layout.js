
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Oman",
  description:
    "Explore Oman’s emotional archetype - The Desert Poet. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Oman, Oman archetype, The Desert Poet, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/oman",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Oman",
    description:
      "Journey through Oman’s emotional identity — The Desert Poet, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/oman",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/oman_preview.webp",
        width: 1200,
        height: 630,
        alt: "Oman - The Desert Poet | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Oman (The Desert Poet)",
    description:
      "Discover Oman’s emotional essence through the archetype The Desert Poet.",
    images: ["/private_images/encyclopedia/countries/oman_preview.webp"],
  },
};

export default function OmanLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Liberia",
  description:
    "Explore Liberia’s emotional archetype - The Healer of Tears. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Liberia, Liberia archetype, The Healer of Tears, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/liberia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Liberia",
    description:
      "Journey through Liberia’s emotional identity — The Healer of Tears, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/liberia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/liberia_preview.webp",
        width: 1200,
        height: 630,
        alt: "Liberia - The Healer of Tears | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Liberia (The Healer of Tears)",
    description:
      "Discover Liberia’s emotional essence through the archetype The Healer of Tears.",
    images: ["/private_images/encyclopedia/countries/liberia_preview.webp"],
  },
};

export default function LiberiaLayout({ children }) {
  return <>{children}</>;
}

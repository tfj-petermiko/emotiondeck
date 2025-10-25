
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Mauritius",
  description:
    "Explore Mauritius’s emotional archetype - The Ocean Healer. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Mauritius, Mauritius archetype, The Ocean Healer, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/mauritius",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Mauritius",
    description:
      "Journey through Mauritius’s emotional identity — The Ocean Healer, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/mauritius",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/mauritius_preview.webp",
        width: 1200,
        height: 630,
        alt: "Mauritius - The Ocean Healer | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Mauritius (The Ocean Healer)",
    description:
      "Discover Mauritius’s emotional essence through the archetype The Ocean Healer.",
    images: ["/private_images/encyclopedia/countries/mauritius_preview.webp"],
  },
};

export default function MauritiusLayout({ children }) {
  return <>{children}</>;
}

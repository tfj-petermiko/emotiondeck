
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Turks and Caicos",
  description:
    "Explore Turks and Caicos’s emotional archetype - The Horizon Dancer. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Turks and Caicos, Turks and Caicos archetype, The Horizon Dancer, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/turks-and-caicos",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Turks and Caicos",
    description:
      "Journey through Turks and Caicos’s emotional identity — The Horizon Dancer, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/turks-and-caicos",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/turks_and_caicos_preview.webp",
        width: 1200,
        height: 630,
        alt: "Turks and Caicos - The Horizon Dancer | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Turks and Caicos (The Horizon Dancer)",
    description:
      "Discover Turks and Caicos’s emotional essence through the archetype The Horizon Dancer.",
    images: ["/private_images/encyclopedia/countries/turks_and_caicos_preview.webp"],
  },
};

export default function TurksandCaicosLayout({ children }) {
  return <>{children}</>;
}

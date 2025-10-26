
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Turks and Caicos",
  description: "Turks and Caicos' emotional archetype - The Unknown Soul. This essence captures profound mystery and hidden depths, inviting introspection and a journey within.",
  keywords: "EmotionDeck Turks and Caicos, The Horizon Dancer emotion, Turks and Caicos culture, emotion and psychology, empathy in Turks and Caicos, identity and emotion, Horizon Dancer empathy, EmotionDeck identity, psychology of emotion, culture and emotion, Turks and Caicos identity, Horizon Dancer psychology",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/turks-and-caicos",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Turks and Caicos",
    description: "Turks and Caicos' emotional archetype - The Unknown Soul. This essence captures profound mystery and hidden depths, inviting introspection and a journey within.",
    url: "https://emotiondeck.com/encyclopedia/turks-and-caicos",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
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
    description: "Turks and Caicos' emotional archetype - The Unknown Soul. This essence captures profound mystery and hidden depths, inviting introspection and a journey within.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function TurksandCaicosLayout({ children }) {
  return <>{children}</>;
}

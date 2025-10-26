
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Iran",
  description: "Iran's emotional archetype - The Unknown Soul. It embodies mystique and depth, revealing stories of hidden desires, introspection, and the quest for connection.",
  keywords: "EmotionDeck Iran, The Pilgrim of Faith, Iranian soul, sacred journey, ancient whispers, eternal longing, emotional culture Iran, Iranian empathy, national identity Iran, Jungian archetypes Iran, symbolism Iran, Persian psyche, spiritual symbolism, cultural psychology Iran, poetic identity, Middle Eastern emotion, archetypal journey",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/iran",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Iran",
    description: "Iran's emotional archetype - The Unknown Soul. It embodies mystique and depth, revealing stories of hidden desires, introspection, and the quest for connection.",
    url: "https://emotiondeck.com/encyclopedia/iran",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Iran - The Pilgrim of Faith | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Iran (The Pilgrim of Faith)",
    description: "Iran's emotional archetype - The Unknown Soul. It embodies mystique and depth, revealing stories of hidden desires, introspection, and the quest for connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function IranLayout({ children }) {
  return <>{children}</>;
}

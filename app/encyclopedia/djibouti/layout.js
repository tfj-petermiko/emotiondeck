
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Djibouti",
  description: "Djibouti’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s deep-rooted spirit and timeless soul.",
  keywords: "EmotionDeck Djibouti, The Desert Voice, Djibouti resilience, ancient sands symbolism, emotional culture Djibouti, Djibouti empathy, Jungian archetypes Djibouti, national identity Djibouti, symbolic strength, desert psychology, cultural symbolism, Djibouti spirit, emotional resilience, quiet strength, Djibouti mythology, poetic symbolism, Djibouti heritage",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/djibouti",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Djibouti",
    description: "Djibouti’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s deep-rooted spirit and timeless soul.",
    url: "https://emotiondeck.com/encyclopedia/djibouti",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Djibouti - The Desert Voice | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Djibouti (The Desert Voice)",
    description: "Djibouti’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s deep-rooted spirit and timeless soul.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function DjiboutiLayout({ children }) {
  return <>{children}</>;
}

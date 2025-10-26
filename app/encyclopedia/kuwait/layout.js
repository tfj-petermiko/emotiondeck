
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Kuwait",
  description: "Kuwait’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s enduring spirit and cultural soul.",
  keywords: "EmotionDeck Kuwait, The Dream of Dawn, Kuwaiti soul, emotional culture, ancient sands, promise of light, national identity, symbolic awakening, Jungian archetypes, empathy, cultural symbolism, quiet awakening, Arabian emotion, psyche of Kuwait, poetic symbolism, emotional heritage, Middle Eastern identity, dawn archetype",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/kuwait",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Kuwait",
    description: "Kuwait’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s enduring spirit and cultural soul.",
    url: "https://emotiondeck.com/encyclopedia/kuwait",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Kuwait - The Dream of Dawn | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Kuwait (The Dream of Dawn)",
    description: "Kuwait’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s enduring spirit and cultural soul.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function KuwaitLayout({ children }) {
  return <>{children}</>;
}

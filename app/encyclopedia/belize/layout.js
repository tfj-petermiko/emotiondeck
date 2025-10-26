
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Belize",
  description: "Belize’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s whispered dreams and enduring spirit woven through time’s deep river.",
  keywords: "EmotionDeck Belize, The Silent Watcher, Belizean soul, emotional culture, Jungian archetypes, national identity, emerald canopy, cultural symbolism, quiet guardian, untold stories, empathy, psychological archetype, Belizean psyche, symbolic essence, emotional heritage, Caribbean emotions, nature symbolism, cultural empathy",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/belize",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Belize",
    description: "Belize’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s whispered dreams and enduring spirit woven through time’s deep river.",
    url: "https://emotiondeck.com/encyclopedia/belize",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Belize - The Silent Watcher | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Belize (The Silent Watcher)",
    description: "Belize’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s whispered dreams and enduring spirit woven through time’s deep river.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function BelizeLayout({ children }) {
  return <>{children}</>;
}

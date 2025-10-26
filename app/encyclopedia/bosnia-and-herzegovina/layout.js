
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Bosnia and Herzegovina",
  description: "Bosnia and Herzegovina’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Bosnia, The Bridgekeeper, Bosnian soul, cultural thresholds, emotional heritage, Jungian archetypes, symbolic identity, national psyche, empathy in Bosnia, Bosnian resilience, past and future, psychological symbolism, Bosnian emotional culture, bridging histories, silent resonance, guardian archetype, Balkan identity, emotional symbolism",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/bosnia-and-herzegovina",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Bosnia and Herzegovina",
    description: "Bosnia and Herzegovina’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/bosnia-and-herzegovina",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Bosnia and Herzegovina - The Bridgekeeper | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Bosnia and Herzegovina (The Bridgekeeper)",
    description: "Bosnia and Herzegovina’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function BosniaandHerzegovinaLayout({ children }) {
  return <>{children}</>;
}

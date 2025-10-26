
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Ethiopia",
  description: "Ethiopia's emotional archetype - The Unknown Soul. It embodies profound mystery and hidden depth, illuminating the journey of self-discovery and uncharted connection.",
  keywords: "Ethiopia emotion, Spirit of Dawn, timeless hope, ancient skies, Ethiopian psyche, archetypal awakening, cultural symbolism, emotional culture, Jungian archetypes, national identity, empathy in Ethiopia, Ethiopian soul, symbolic essence, poetic symbolism, emotional resilience, cultural awakening, African archetypes, Ethiopian mythology",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/ethiopia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Ethiopia",
    description: "Ethiopia's emotional archetype - The Unknown Soul. It embodies profound mystery and hidden depth, illuminating the journey of self-discovery and uncharted connection.",
    url: "https://emotiondeck.com/encyclopedia/ethiopia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Ethiopia - The Spirit of Dawn | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Ethiopia (The Spirit of Dawn)",
    description: "Ethiopia's emotional archetype - The Unknown Soul. It embodies profound mystery and hidden depth, illuminating the journey of self-discovery and uncharted connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function EthiopiaLayout({ children }) {
  return <>{children}</>;
}

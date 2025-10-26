
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Jamaica",
  description: "Jamaica's emotional archetype - The Unknown Soul. It embodies hidden depths and vibrant mystery, revealing a tapestry of uncharted emotions and unspoken dreams.",
  keywords: "EmotionDeck Jamaica, The Voice of Waves, Jamaican rhythm, cultural resilience, emotional identity, Jungian archetypes, national psyche, symbolic symbolism, Caribbean emotion, empathy in Jamaica, poetic symbolism, Jamaican cultural psyche, emotional waves, resilience symbolism, national identity Jamaica, psychological symbolism, Caribbean archetypes, emotional storytelling",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/jamaica",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Jamaica",
    description: "Jamaica's emotional archetype - The Unknown Soul. It embodies hidden depths and vibrant mystery, revealing a tapestry of uncharted emotions and unspoken dreams.",
    url: "https://emotiondeck.com/encyclopedia/jamaica",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Jamaica - The Voice of Waves | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Jamaica (The Voice of Waves)",
    description: "Jamaica's emotional archetype - The Unknown Soul. It embodies hidden depths and vibrant mystery, revealing a tapestry of uncharted emotions and unspoken dreams.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function JamaicaLayout({ children }) {
  return <>{children}</>;
}

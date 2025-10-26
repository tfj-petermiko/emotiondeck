
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Burkina Faso",
  description: "Burkina Faso’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "Burkina Faso emotion, Compassionate Nomad, wandering heart, resilience spirit, profound empathy, emotional culture Burkina, Jungian archetypes Africa, symbolic identity, nomadic symbolism, cultural empathy, national psyche Burkina, emotional resilience, empathy psychology, poetic symbolism, African emotional landscape, Burkinabé identity, archetype psychology, symbolic nomadism",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/burkina-faso",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Burkina Faso",
    description: "Burkina Faso’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/burkina-faso",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Burkina Faso - The Compassionate Nomad | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Burkina Faso (The Compassionate Nomad)",
    description: "Burkina Faso’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function BurkinaFasoLayout({ children }) {
  return <>{children}</>;
}

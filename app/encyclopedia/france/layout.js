
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - France",
  description: "France’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck France, The Aesthetic Rebel, French passion, defiant beauty, emotional culture France, symbolic France, Jungian France, French empathy, French national identity, poetic symbolism, French emotional psychology, cultural shadows and light, French archetypes, timeless passion France, emotional depth France, symbolic rebellion, France emotional resonance",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/france",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - France",
    description: "France’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/france",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "France - The Aesthetic Rebel | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — France (The Aesthetic Rebel)",
    description: "France’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function FranceLayout({ children }) {
  return <>{children}</>;
}

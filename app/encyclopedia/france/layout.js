
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - France",
  description: "France's emotional archetype - The Unknown Soul. It embodies a haunting depth and uncharted passions, revealing the beauty of mystery, reflection, and human longing.",
  keywords: "EmotionDeck France, The Aesthetic Rebel, French passion, defiant beauty, emotional culture France, symbolic France, Jungian France, French empathy, French national identity, poetic symbolism, French emotional psychology, cultural shadows and light, French archetypes, timeless passion France, emotional depth France, symbolic rebellion, France emotional resonance",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/france",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - France",
    description: "France's emotional archetype - The Unknown Soul. It embodies a haunting depth and uncharted passions, revealing the beauty of mystery, reflection, and human longing.",
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
    description: "France's emotional archetype - The Unknown Soul. It embodies a haunting depth and uncharted passions, revealing the beauty of mystery, reflection, and human longing.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function FranceLayout({ children }) {
  return <>{children}</>;
}

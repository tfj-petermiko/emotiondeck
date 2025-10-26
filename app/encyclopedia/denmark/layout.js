
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Denmark",
  description: "Denmark's emotional archetype - The Unknown Soul. It embodies introspective depth and enigmatic beauty, revealing a realm of mystery, connection, and silent yearning.",
  keywords: "EmotionDeck Denmark, The Joyful Minimalist, Danish simplicity, emotional culture Denmark, Danish empathy, national identity Denmark, Jungian archetypes Denmark, symbolic Denmark, joyful minimalism, Danish emotional psychology, Scandinavian emotionality, cultural symbolism Denmark, Denmark archetypes, poetic Danish identity, emotional harmony Denmark, minimalist joy, Danish cultural psyche, empathy in Denmark",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/denmark",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Denmark",
    description: "Denmark's emotional archetype - The Unknown Soul. It embodies introspective depth and enigmatic beauty, revealing a realm of mystery, connection, and silent yearning.",
    url: "https://emotiondeck.com/encyclopedia/denmark",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Denmark - The Joyful Minimalist | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Denmark (The Joyful Minimalist)",
    description: "Denmark's emotional archetype - The Unknown Soul. It embodies introspective depth and enigmatic beauty, revealing a realm of mystery, connection, and silent yearning.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function DenmarkLayout({ children }) {
  return <>{children}</>;
}

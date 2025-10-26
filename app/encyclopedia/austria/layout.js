
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Austria",
  description: "Austria’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Austria, Melancholic Maestro, Austrian soul, introspective symphony, refined sorrow, emotional culture, Jungian archetypes, cultural empathy, national identity, symbolic melancholy, poetic symbolism, Austrian psychology, emotional introspection, musical longing, archetypal emotions, cultural symbolism, tragic beauty, emotional heritage",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/austria",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Austria",
    description: "Austria’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/austria",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Austria - The Melancholic Maestro | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Austria (The Melancholic Maestro)",
    description: "Austria’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function AustriaLayout({ children }) {
  return <>{children}</>;
}

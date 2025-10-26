
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Equatorial Guinea",
  description: "Equatorial Guinea's emotional archetype - The Unknown Soul. It embodies hidden depths and silent stories, revealing a journey of self-discovery and profound introspection.",
  keywords: "EmotionDeck Equatorial Guinea, The Forgotten Song, Equatorial Guinea psyche, emotional culture, cultural shadows, unspoken truths, Jungian symbolism, national identity, African archetypes, poetic symbolism, empathy in culture, psychological roots, ancestral memory, symbolic melancholy, cultural empathy, emotional heritage, Equatorial Guinea soul",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/equatorial-guinea",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Equatorial Guinea",
    description: "Equatorial Guinea's emotional archetype - The Unknown Soul. It embodies hidden depths and silent stories, revealing a journey of self-discovery and profound introspection.",
    url: "https://emotiondeck.com/encyclopedia/equatorial-guinea",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Equatorial Guinea - The Forgotten Song | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Equatorial Guinea (The Forgotten Song)",
    description: "Equatorial Guinea's emotional archetype - The Unknown Soul. It embodies hidden depths and silent stories, revealing a journey of self-discovery and profound introspection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function EquatorialGuineaLayout({ children }) {
  return <>{children}</>;
}

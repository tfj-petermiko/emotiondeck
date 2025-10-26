
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Bhutan",
  description: "Bhutan's emotional archetype - The Unknown Soul. It embodies profound introspection and hidden depths, inviting a journey into the heart of mystery and self-discovery.",
  keywords: "EmotionDeck Bhutan, The Soul of Dawn, Bhutanese spirit, emotional culture Bhutan, Jungian archetypes Bhutan, Bhutan symbolism, national identity Bhutan, spiritual harmony, Bhutanese empathy, cultural awakening, poetic symbolism, emotional psychology Bhutan, inner light Bhutan, timeless harmony, Bhutanese archetype, soul and spirit, Bhutan emotional identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/bhutan",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Bhutan",
    description: "Bhutan's emotional archetype - The Unknown Soul. It embodies profound introspection and hidden depths, inviting a journey into the heart of mystery and self-discovery.",
    url: "https://emotiondeck.com/encyclopedia/bhutan",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Bhutan - The Soul of Dawn | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Bhutan (The Soul of Dawn)",
    description: "Bhutan's emotional archetype - The Unknown Soul. It embodies profound introspection and hidden depths, inviting a journey into the heart of mystery and self-discovery.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function BhutanLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Albania",
  description: "Albania’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Albania, Guardian of Honour, Albanian ethos, ancestral pride, emotional culture, Jungian archetypes, national identity, symbolic sentinel, cultural symbolism, emotional integrity, Albanian psychology, empathy in Albania, poetic symbolism, Balkan heritage, steadfast guardianship, cultural guardianship, emotional resilience, honour and pride",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/albania",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Albania",
    description: "Albania’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/albania",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Albania - The Guardian of Honour | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Albania (The Guardian of Honour)",
    description: "Albania’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function AlbaniaLayout({ children }) {
  return <>{children}</>;
}

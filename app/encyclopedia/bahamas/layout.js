
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Bahamas",
  description: "Bahamas’ emotional archetype - The Unknown Soul. It embodies hidden depths and untold stories, revealing a journey of discovery, connection, and whispered dreams.",
  keywords: "EmotionDeck Bahamas, Keeper of Coral, submerged memories, tides of feeling, Bahamian emotions, emotional culture Bahamas, Jungian archetypes, symbolic guardian, Bahamian identity, coral symbolism, empathy Bahamas, Caribbean emotional psyche, cultural symbolism Bahamas, guardian archetype, emotional heritage, national psyche Bahamas, poetic symbolism, emotional tides",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/bahamas",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Bahamas",
    description: "Bahamas’ emotional archetype - The Unknown Soul. It embodies hidden depths and untold stories, revealing a journey of discovery, connection, and whispered dreams.",
    url: "https://emotiondeck.com/encyclopedia/bahamas",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Bahamas - The Keeper of Coral | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Bahamas (The Keeper of Coral)",
    description: "Bahamas’ emotional archetype - The Unknown Soul. It embodies hidden depths and untold stories, revealing a journey of discovery, connection, and whispered dreams.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function BahamasLayout({ children }) {
  return <>{children}</>;
}

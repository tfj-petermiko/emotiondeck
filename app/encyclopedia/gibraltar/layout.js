
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Gibraltar",
  description: "Gibraltar’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "Gibraltar sentinel, cultural crossroads, emotional resilience, Jungian archetype, silent watchfulness, national identity, Mediterranean symbolism, cross-continental culture, empathy dynamics, emotional culture, British Gibraltar, symbolic guardian, psychological borderland, cultural empathy, sentinel archetype, emotional symbolism, hybrid identity, ancestral watch",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/gibraltar",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Gibraltar",
    description: "Gibraltar’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/gibraltar",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Gibraltar - The Sentinel Between Worlds | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Gibraltar (The Sentinel Between Worlds)",
    description: "Gibraltar’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function GibraltarLayout({ children }) {
  return <>{children}</>;
}

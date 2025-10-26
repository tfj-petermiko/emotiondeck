
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Tunisia",
  description: "Tunisia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Tunisia journey, The Inner Oasis emotions, Tunisia cultural empathy, EmotionDeck psychology insights, identity and emotion Tunisia, The Inner Oasis psychology, EmotionDeck cultural identity, empathy in Tunisia, Tunisia emotion exploration, psychology of The Inner Oasis, cultural emotion decks, EmotionDeck identity journey",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/tunisia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Tunisia",
    description: "Tunisia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/tunisia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Tunisia - The Inner Oasis | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Tunisia (The Inner Oasis)",
    description: "Tunisia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function TunisiaLayout({ children }) {
  return <>{children}</>;
}

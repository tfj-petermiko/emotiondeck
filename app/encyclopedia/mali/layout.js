
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Mali",
  description: "Mali’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s enduring soul.",
  keywords: "EmotionDeck Mali, Protector of Ancestors, ancestral guardian, Malian heritage, emotional culture, Jungian archetypes, ancestral echoes, symbolic identity, Malian psychology, cultural empathy, national spirit, emotional symbolism, guardian archetype, Malian soul, collective memory, ancestral weaving, emotional legacy",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/mali",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Mali",
    description: "Mali’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s enduring soul.",
    url: "https://emotiondeck.com/encyclopedia/mali",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Mali - The Protector of Ancestors | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Mali (The Protector of Ancestors)",
    description: "Mali’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s enduring soul.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MaliLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Bolivia",
  description: "Bolivia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Bolivia, The Voice of Wind, Andean whispers, salt flats symbolism, emotional culture Bolivia, Jungian archetypes Bolivia, Bolivian empathy, national identity Bolivia, ancient echoes Andes, symbolic psychology Bolivia, cultural soul Bolivia, emotional landscapes, Andean spirit, Bolivia mythology, poetic symbolism, native emotional wisdom, wind archetype, Bolivian psyche",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/bolivia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Bolivia",
    description: "Bolivia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/bolivia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Bolivia - The Voice of Wind | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Bolivia (The Voice of Wind)",
    description: "Bolivia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function BoliviaLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Ceuta",
  description: "Ceuta’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Ceuta, The Spirit of Solitude, Ceuta symbolism, emotional culture Ceuta, Jungian archetypes, Ceuta introspection, solitude and psyche, Ceuta emotional identity, symbolic isolation, Ceuta empathy, national identity Ceuta, poetic symbolism, Ceuta psychology, cultural solitude, Ceuta soul tapestry, British English symbolism, emotional resilience Ceuta, Ceuta cultural psyche",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/ceuta",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Ceuta",
    description: "Ceuta’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/ceuta",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Ceuta - The Spirit of Solitude | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Ceuta (The Spirit of Solitude)",
    description: "Ceuta’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function CeutaLayout({ children }) {
  return <>{children}</>;
}

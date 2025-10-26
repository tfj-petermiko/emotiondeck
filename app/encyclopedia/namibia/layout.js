
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Namibia",
  description: "Namibia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Namibia, The Eternal Horizon, Namibian soul, emotional vastness, Jungian archetypes, cultural introspection, Namibian psyche, national identity, endless skies, symbolic landscape, emotional culture, boundless introspection, Namibian symbolism, poetic emotion, psychological vastness, empathy in Namibia, timeless horizon, African emotional identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/namibia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Namibia",
    description: "Namibia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/namibia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Namibia - The Eternal Horizon | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Namibia (The Eternal Horizon)",
    description: "Namibia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function NamibiaLayout({ children }) {
  return <>{children}</>;
}

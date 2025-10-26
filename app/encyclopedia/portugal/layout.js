
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Portugal",
  description: "Portugal’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Portugal, The Dreaming Navigator emotions, Portuguese culture and empathy, EmotionDeck psychology Portugal, Dreaming Navigator identity, emotional journey Portugal, cultural empathy Portugal, EmotionDeck psychological insight, dreaming navigation emotion, Portugal identity psychology, empathetic culture Portugal, emotional navigation Dreaming Navigator",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/portugal",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Portugal",
    description: "Portugal’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/portugal",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Portugal - The Dreaming Navigator | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Portugal (The Dreaming Navigator)",
    description: "Portugal’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function PortugalLayout({ children }) {
  return <>{children}</>;
}

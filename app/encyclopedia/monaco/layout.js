
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Monaco",
  description: "Monaco’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "Monaco emotion, Elegant Performer archetype, Mediterranean grace, poised passion, emotional culture Monaco, Jungian archetypes Monaco, symbolic identity, national psyche Monaco, cultural empathy Monaco, poetic symbolism, emotional elegance, Monaco psychology, Mediterranean symbolism, Monaco cultural identity, empathetic expression, passionate grace, symbolic dance, emotional national identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/monaco",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Monaco",
    description: "Monaco’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/monaco",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Monaco - The Elegant Performer | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Monaco (The Elegant Performer)",
    description: "Monaco’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function MonacoLayout({ children }) {
  return <>{children}</>;
}

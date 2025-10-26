
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Togo",
  description:
    "Explore Togo’s emotional archetype - The Echo of Faith. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Togo, Togo archetype, The Echo of Faith, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/togo",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Togo",
    description:
      "Journey through Togo’s emotional identity — The Echo of Faith, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/togo",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Togo - The Echo of Faith | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Togo (The Echo of Faith)",
    description:
      "Discover Togo’s emotional essence through the archetype The Echo of Faith.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function TogoLayout({ children }) {
  return <>{children}</>;
}

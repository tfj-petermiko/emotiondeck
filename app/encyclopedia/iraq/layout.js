
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Iraq",
  description:
    "Explore Iraq’s emotional archetype - The Light of Unity. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Iraq, Iraq archetype, The Light of Unity, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/iraq",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Iraq",
    description:
      "Journey through Iraq’s emotional identity — The Light of Unity, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/iraq",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Iraq - The Light of Unity | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Iraq (The Light of Unity)",
    description:
      "Discover Iraq’s emotional essence through the archetype The Light of Unity.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function IraqLayout({ children }) {
  return <>{children}</>;
}

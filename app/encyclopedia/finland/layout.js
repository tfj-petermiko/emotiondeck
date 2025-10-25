
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Finland",
  description:
    "Explore Finland’s emotional archetype - The Inner Flame. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Finland, Finland archetype, The Inner Flame, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/finland",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Finland",
    description:
      "Journey through Finland’s emotional identity — The Inner Flame, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/finland",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/finland_preview.webp",
        width: 1200,
        height: 630,
        alt: "Finland - The Inner Flame | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Finland (The Inner Flame)",
    description:
      "Discover Finland’s emotional essence through the archetype The Inner Flame.",
    images: ["/private_images/encyclopedia/countries/finland_preview.webp"],
  },
};

export default function FinlandLayout({ children }) {
  return <>{children}</>;
}

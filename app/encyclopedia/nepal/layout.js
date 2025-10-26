
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Nepal",
  description:
    "Explore Nepal’s emotional archetype - The Seeker of Balance. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Nepal, Nepal archetype, The Seeker of Balance, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/nepal",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Nepal",
    description:
      "Journey through Nepal’s emotional identity — The Seeker of Balance, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/nepal",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Nepal - The Seeker of Balance | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Nepal (The Seeker of Balance)",
    description:
      "Discover Nepal’s emotional essence through the archetype The Seeker of Balance.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function NepalLayout({ children }) {
  return <>{children}</>;
}

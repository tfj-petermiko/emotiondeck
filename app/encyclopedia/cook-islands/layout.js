
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Cook Islands",
  description:
    "Explore Cook Islands’s emotional archetype - The Dreaming Reef. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Cook Islands, Cook Islands archetype, The Dreaming Reef, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/cook-islands",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Cook Islands",
    description:
      "Journey through Cook Islands’s emotional identity — The Dreaming Reef, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/cook-islands",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Cook Islands - The Dreaming Reef | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Cook Islands (The Dreaming Reef)",
    description:
      "Discover Cook Islands’s emotional essence through the archetype The Dreaming Reef.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function CookIslandsLayout({ children }) {
  return <>{children}</>;
}

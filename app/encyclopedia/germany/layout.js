
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Germany",
  description:
    "Explore Germany’s emotional archetype - The Architect of Order. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Germany, Germany archetype, The Architect of Order, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/germany",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Germany",
    description:
      "Journey through Germany’s emotional identity — The Architect of Order, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/germany",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Germany - The Architect of Order | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Germany (The Architect of Order)",
    description:
      "Discover Germany’s emotional essence through the archetype The Architect of Order.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function GermanyLayout({ children }) {
  return <>{children}</>;
}

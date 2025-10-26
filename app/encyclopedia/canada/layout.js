
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Canada",
  description:
    "Explore Canada’s emotional archetype - The Guardian of Spirit. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Canada, Canada archetype, The Guardian of Spirit, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/canada",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Canada",
    description:
      "Journey through Canada’s emotional identity — The Guardian of Spirit, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/canada",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Canada - The Guardian of Spirit | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Canada (The Guardian of Spirit)",
    description:
      "Discover Canada’s emotional essence through the archetype The Guardian of Spirit.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function CanadaLayout({ children }) {
  return <>{children}</>;
}

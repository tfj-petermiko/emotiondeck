
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Indonesia",
  description:
    "Explore Indonesia’s emotional archetype - The Celestial Weaver. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Indonesia, Indonesia archetype, The Celestial Weaver, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/indonesia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Indonesia",
    description:
      "Journey through Indonesia’s emotional identity — The Celestial Weaver, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/indonesia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Indonesia - The Celestial Weaver | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Indonesia (The Celestial Weaver)",
    description:
      "Discover Indonesia’s emotional essence through the archetype The Celestial Weaver.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function IndonesiaLayout({ children }) {
  return <>{children}</>;
}

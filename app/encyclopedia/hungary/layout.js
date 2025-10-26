
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Hungary",
  description:
    "Explore Hungary’s emotional archetype - The Romantic Survivor. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Hungary, Hungary archetype, The Romantic Survivor, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/hungary",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Hungary",
    description:
      "Journey through Hungary’s emotional identity — The Romantic Survivor, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/hungary",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Hungary - The Romantic Survivor | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Hungary (The Romantic Survivor)",
    description:
      "Discover Hungary’s emotional essence through the archetype The Romantic Survivor.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function HungaryLayout({ children }) {
  return <>{children}</>;
}

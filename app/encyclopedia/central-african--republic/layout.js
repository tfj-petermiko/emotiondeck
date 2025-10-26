
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Central African Republic",
  description:
    "Explore Central African Republic’s emotional archetype - The Hidden Light. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Central African Republic, Central African Republic archetype, The Hidden Light, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/central-african-republic",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Central African Republic",
    description:
      "Journey through Central African Republic’s emotional identity — The Hidden Light, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/central-african-republic",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Central African Republic - The Hidden Light | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Central African Republic (The Hidden Light)",
    description:
      "Discover Central African Republic’s emotional essence through the archetype The Hidden Light.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function CentralAfricanRepublicLayout({ children }) {
  return <>{children}</>;
}

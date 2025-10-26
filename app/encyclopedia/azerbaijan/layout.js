
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Azerbaijan",
  description:
    "Explore Azerbaijan’s emotional archetype - The Sky Artisan. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Azerbaijan, Azerbaijan archetype, The Sky Artisan, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/azerbaijan",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Azerbaijan",
    description:
      "Journey through Azerbaijan’s emotional identity — The Sky Artisan, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/azerbaijan",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Azerbaijan - The Sky Artisan | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Azerbaijan (The Sky Artisan)",
    description:
      "Discover Azerbaijan’s emotional essence through the archetype The Sky Artisan.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function AzerbaijanLayout({ children }) {
  return <>{children}</>;
}

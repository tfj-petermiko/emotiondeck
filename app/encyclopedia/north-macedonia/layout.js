
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - North Macedonia",
  description: "North Macedonia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck North Macedonia, Keeper of Echoes emotion, North Macedonia culture empathy, emotional identity North Macedonia, psychology of emotions Macedonia, empathy and culture EmotionDeck, Keeper of Echoes psychology, North Macedonia emotional heritage, emotional identity Keeper of Echoes, EmotionDeck empathy culture, psychology culture North Macedonia, Keeper of Echoes emotional journey",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/north-macedonia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - North Macedonia",
    description: "North Macedonia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/north-macedonia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "North Macedonia - The Keeper of Echoes | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — North Macedonia (The Keeper of Echoes)",
    description: "North Macedonia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function NorthMacedoniaLayout({ children }) {
  return <>{children}</>;
}

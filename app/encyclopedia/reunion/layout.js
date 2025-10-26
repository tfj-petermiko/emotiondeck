
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Reunion",
  description: "The Unknown Soul - an emotional archetype of Reunion. It unveils the profound connections that bind us, celebrating the warmth of rediscovery and shared memories.",
  keywords: "EmotionDeck reunion, The Ocean Memory emotion, cultural reunion psychology, empathy in reunion, identity and emotion, Ocean Memory culture, reunion emotion psychology, EmotionDeck empathy, cultural identity reunion, psychology of emotion, Ocean Memory identity, reunion and empathy",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/reunion",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Reunion",
    description: "The Unknown Soul - an emotional archetype of Reunion. It unveils the profound connections that bind us, celebrating the warmth of rediscovery and shared memories.",
    url: "https://emotiondeck.com/encyclopedia/reunion",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Reunion - The Ocean Memory | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Reunion (The Ocean Memory)",
    description: "The Unknown Soul - an emotional archetype of Reunion. It unveils the profound connections that bind us, celebrating the warmth of rediscovery and shared memories.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ReunionLayout({ children }) {
  return <>{children}</>;
}

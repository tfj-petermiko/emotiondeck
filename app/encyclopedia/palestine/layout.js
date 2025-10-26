
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Palestine",
  description: "Palestine's emotional archetype - The Unknown Soul. It embodies hidden depths and untold stories, reflecting a journey of resilience, longing, and profound hope.",
  keywords: "EmotionDeck Palestine Spirit of Endurance, Palestine emotion and identity, EmotionDeck cultural empathy Palestine, psychology of endurance Palestine, Spirit of Endurance emotionDeck insights, Palestinian cultural identity emotion, empathy in Palestine psychology, EmotionDeck emotional resilience Palestine, Spirit of Endurance cultural psychology, Palestine emotion and spirit, EmotionDeck empathy and identity, enduring spirit emotionDeck Palestine",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/palestine",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Palestine",
    description: "Palestine's emotional archetype - The Unknown Soul. It embodies hidden depths and untold stories, reflecting a journey of resilience, longing, and profound hope.",
    url: "https://emotiondeck.com/encyclopedia/palestine",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Palestine - The Spirit of Endurance | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Palestine (The Spirit of Endurance)",
    description: "Palestine's emotional archetype - The Unknown Soul. It embodies hidden depths and untold stories, reflecting a journey of resilience, longing, and profound hope.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function PalestineLayout({ children }) {
  return <>{children}</>;
}

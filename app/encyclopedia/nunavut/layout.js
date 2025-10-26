
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Nunavut",
  description: "Nunavut's emotional archetype - The Unknown Soul. It embodies deep introspection and mysterious beauty, unveiling a realm of uncharted feelings and profound connections.",
  keywords: "EmotionDeck Nunavut emotions, The Spirit of North culture, Nunavut identity psychology, empathy in Nunavut, Spirit of North emotiondeck, Northern culture and emotion, Nunavut emotional identity, Spirit of North empathy, emotion psychology Nunavut, The Spirit of North feelings, empathy culture Nunavut, EmotionDeck northern identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/nunavut",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Nunavut",
    description: "Nunavut's emotional archetype - The Unknown Soul. It embodies deep introspection and mysterious beauty, unveiling a realm of uncharted feelings and profound connections.",
    url: "https://emotiondeck.com/encyclopedia/nunavut",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Nunavut - The Spirit of North | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Nunavut (The Spirit of North)",
    description: "Nunavut's emotional archetype - The Unknown Soul. It embodies deep introspection and mysterious beauty, unveiling a realm of uncharted feelings and profound connections.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function NunavutLayout({ children }) {
  return <>{children}</>;
}

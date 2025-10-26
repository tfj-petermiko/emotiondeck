
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Portugal",
  description: "Portugal's emotional archetype - The Unknown Soul. It embodies a deep longing and rich mystery, revealing a tapestry of untold stories and uncharted emotions.",
  keywords: "EmotionDeck Portugal, The Dreaming Navigator emotions, Portuguese culture and empathy, EmotionDeck psychology Portugal, Dreaming Navigator identity, emotional journey Portugal, cultural empathy Portugal, EmotionDeck psychological insight, dreaming navigation emotion, Portugal identity psychology, empathetic culture Portugal, emotional navigation Dreaming Navigator",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/portugal",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Portugal",
    description: "Portugal's emotional archetype - The Unknown Soul. It embodies a deep longing and rich mystery, revealing a tapestry of untold stories and uncharted emotions.",
    url: "https://emotiondeck.com/encyclopedia/portugal",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Portugal - The Dreaming Navigator | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Portugal (The Dreaming Navigator)",
    description: "Portugal's emotional archetype - The Unknown Soul. It embodies a deep longing and rich mystery, revealing a tapestry of untold stories and uncharted emotions.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function PortugalLayout({ children }) {
  return <>{children}</>;
}

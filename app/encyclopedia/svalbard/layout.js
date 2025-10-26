
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Svalbard",
  description: "Svalbard's emotional archetype - The Unknown Soul. It embodies profound mystery and uncharted depths, revealing layers of silence, introspection, and haunting beauty.",
  keywords: "EmotionDeck Svalbard emotion whispers, The Arctic Keeper empathy tales, Svalbard culture and identity, emotion maps of Svalbard, The Arctic Keeper psychology deep, Svalbard emotion and culture, empathy journeys in Svalbard, EmotionDeck Arctic emotion fusion, psychology of The Arctic Keeper, Svalbard identity and empathy, emotion landscapes of Svalbard, The Arctic Keeper emotion archives",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/svalbard",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Svalbard",
    description: "Svalbard's emotional archetype - The Unknown Soul. It embodies profound mystery and uncharted depths, revealing layers of silence, introspection, and haunting beauty.",
    url: "https://emotiondeck.com/encyclopedia/svalbard",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Svalbard - The Arctic Keeper | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Svalbard (The Arctic Keeper)",
    description: "Svalbard's emotional archetype - The Unknown Soul. It embodies profound mystery and uncharted depths, revealing layers of silence, introspection, and haunting beauty.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SvalbardLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Ireland",
  description: "Ireland's emotional archetype - The Unknown Soul. It whispers of hidden depths, untold journeys, and the quiet strength found in vulnerability and mystery.",
  keywords: "EmotionDeck Ireland, The Poet of Memory, Irish soul, emotional culture, Jungian archetypes, national identity, ancient whispers, timeless longing, symbolic Ireland, poetic symbolism, Celtic memory, empathy Ireland, emotional heritage, Irish mythology, collective unconscious, cultural symbolism, emotional landscape, Irish psyche",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/ireland",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Ireland",
    description: "Ireland's emotional archetype - The Unknown Soul. It whispers of hidden depths, untold journeys, and the quiet strength found in vulnerability and mystery.",
    url: "https://emotiondeck.com/encyclopedia/ireland",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Ireland - The Poet of Memory | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Ireland (The Poet of Memory)",
    description: "Ireland's emotional archetype - The Unknown Soul. It whispers of hidden depths, untold journeys, and the quiet strength found in vulnerability and mystery.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function IrelandLayout({ children }) {
  return <>{children}</>;
}

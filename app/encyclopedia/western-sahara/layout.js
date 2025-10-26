
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Western Sahara",
  description: "Western Sahara's emotional archetype - The Unknown Soul. It embodies mystery and longing, weaving tales of identity, solitude, and the search for belonging.",
  keywords: "EmotionDeck Western Sahara, The Desert Soul emotion, Western Sahara culture empathy, Desert Soul psychology, EmotionDeck identity Western Sahara, empathy in desert culture, Western Sahara emotional identity, Desert Soul emotional journey, EmotionDeck psychology desert, Western Sahara emotional landscape, Desert Soul cultural identity, psychology of Western Sahara emotions",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/western-sahara",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Western Sahara",
    description: "Western Sahara's emotional archetype - The Unknown Soul. It embodies mystery and longing, weaving tales of identity, solitude, and the search for belonging.",
    url: "https://emotiondeck.com/encyclopedia/western-sahara",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Western Sahara - The Desert Soul | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Western Sahara (The Desert Soul)",
    description: "Western Sahara's emotional archetype - The Unknown Soul. It embodies mystery and longing, weaving tales of identity, solitude, and the search for belonging.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function WesternSaharaLayout({ children }) {
  return <>{children}</>;
}

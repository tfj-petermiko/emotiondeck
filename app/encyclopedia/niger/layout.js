
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Niger",
  description: "Niger's emotional archetype - The Unknown Soul. It embodies profound mystery and hidden depths, inviting introspection, connection, and the essence of humanity.",
  keywords: "EmotionDeck Niger, The Wandering Heart emotions, Niger culture and emotion, empathy in Niger, psychology of Niger, Niger emotional identity, The Wandering Heart psychology, EmotionDeck cultural empathy, Niger emotional landscape, identity and emotion Niger, psychology empathy Niger, EmotionDeck cultural journey",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/niger",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Niger",
    description: "Niger's emotional archetype - The Unknown Soul. It embodies profound mystery and hidden depths, inviting introspection, connection, and the essence of humanity.",
    url: "https://emotiondeck.com/encyclopedia/niger",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Niger - The Wandering Heart | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Niger (The Wandering Heart)",
    description: "Niger's emotional archetype - The Unknown Soul. It embodies profound mystery and hidden depths, inviting introspection, connection, and the essence of humanity.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function NigerLayout({ children }) {
  return <>{children}</>;
}

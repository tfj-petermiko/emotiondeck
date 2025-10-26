
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Norfolk Island",
  description: "Norfolk Island's emotional archetype - The Unknown Soul. It embodies deep mystery and introspection, unearthing hidden depths of identity and connection.",
  keywords: "EmotionDeck Norfolk Island, The Soul of Distance emotion, Norfolk Island culture empathy, EmotionDeck psychology identity, Norfolk Island emotion journey, The Soul of Distance identity, empathy in Norfolk Island culture, EmotionDeck emotional psychology, Norfolk Island emotional identity, The Soul of Distance empathy, EmotionDeck cultural emotion, Norfolk Island psychological identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/norfolk-island",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Norfolk Island",
    description: "Norfolk Island's emotional archetype - The Unknown Soul. It embodies deep mystery and introspection, unearthing hidden depths of identity and connection.",
    url: "https://emotiondeck.com/encyclopedia/norfolk-island",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Norfolk Island - The Soul of Distance | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Norfolk Island (The Soul of Distance)",
    description: "Norfolk Island's emotional archetype - The Unknown Soul. It embodies deep mystery and introspection, unearthing hidden depths of identity and connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function NorfolkIslandLayout({ children }) {
  return <>{children}</>;
}

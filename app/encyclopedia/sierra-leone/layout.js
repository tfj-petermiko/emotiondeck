
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Sierra Leone",
  description: "Sierra Leone's emotional archetype - The Unknown Soul. It embodies profound mystery and hidden depths, revealing a journey of connection, yearning, and self-discovery.",
  keywords: "EmotionDeck Sierra Leone, The Child of Strength emotion, Sierra Leone culture empathy, EmotionDeck psychology identity, Child of Strength emotion Sierra Leone, Sierra Leone emotional culture, empathy and identity Sierra Leone, psychology of strength EmotionDeck, Sierra Leone emotion and identity, Child of Strength psychology EmotionDeck, cultural empathy Sierra Leone, identity and emotion Sierra Leone",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/sierra-leone",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Sierra Leone",
    description: "Sierra Leone's emotional archetype - The Unknown Soul. It embodies profound mystery and hidden depths, revealing a journey of connection, yearning, and self-discovery.",
    url: "https://emotiondeck.com/encyclopedia/sierra-leone",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Sierra Leone - The Child of Strength | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Sierra Leone (The Child of Strength)",
    description: "Sierra Leone's emotional archetype - The Unknown Soul. It embodies profound mystery and hidden depths, revealing a journey of connection, yearning, and self-discovery.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SierraLeoneLayout({ children }) {
  return <>{children}</>;
}

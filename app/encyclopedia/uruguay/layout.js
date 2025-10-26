
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Uruguay",
  description: "Uruguay's emotional archetype - The Unknown Soul. It embodies profound introspection and uncharted depths, revealing a tapestry of yearning, mystery, and authentic connection.",
  keywords: "EmotionDeck Uruguay harmony, The Spirit of Balance psychology, Uruguayan emotion culture, empathy in Uruguay, EmotionDeck identity insights, balance and emotion Uruguay, cultural empathy EmotionDeck, psychology of Uruguayan spirit, EmotionDeck emotional equilibrium, Uruguay cultural identity, Spirit of Balance emotions, empathetic psychology Uruguay",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/uruguay",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Uruguay",
    description: "Uruguay's emotional archetype - The Unknown Soul. It embodies profound introspection and uncharted depths, revealing a tapestry of yearning, mystery, and authentic connection.",
    url: "https://emotiondeck.com/encyclopedia/uruguay",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Uruguay - The Spirit of Balance | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Uruguay (The Spirit of Balance)",
    description: "Uruguay's emotional archetype - The Unknown Soul. It embodies profound introspection and uncharted depths, revealing a tapestry of yearning, mystery, and authentic connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function UruguayLayout({ children }) {
  return <>{children}</>;
}

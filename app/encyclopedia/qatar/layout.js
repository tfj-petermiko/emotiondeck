
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Qatar",
  description: "Qatar's emotional archetype - The Unknown Soul. It captures mysterious depths and uncharted dreams, revealing a tapestry of resilience, longing, and timeless wonder.",
  keywords: "EmotionDeck Qatar emotion, The Song of Sands identity, Qatar cultural emotion, empathy in Qatar, EmotionDeck psychology insights, Qatar emotion and identity, Song of Sands empathy, cultural psychology Qatar, EmotionDeck emotional culture, identity through emotion Qatar, empathy psychology EmotionDeck, The Song of Sands emotion journey",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/qatar",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Qatar",
    description: "Qatar's emotional archetype - The Unknown Soul. It captures mysterious depths and uncharted dreams, revealing a tapestry of resilience, longing, and timeless wonder.",
    url: "https://emotiondeck.com/encyclopedia/qatar",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Qatar - The Song of Sands | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Qatar (The Song of Sands)",
    description: "Qatar's emotional archetype - The Unknown Soul. It captures mysterious depths and uncharted dreams, revealing a tapestry of resilience, longing, and timeless wonder.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function QatarLayout({ children }) {
  return <>{children}</>;
}

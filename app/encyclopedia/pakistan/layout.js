
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Pakistan",
  description: "Pakistan's emotional archetype - The Unknown Soul. It embodies profound mystery and uncharted depths, unveiling layers of resilience, longing, and silent strength.",
  keywords: "EmotionDeck Pakistan insights, The Bridge of Mountains emotion, Pakistani culture and empathy, EmotionDeck psychology Pakistan, emotion and identity Pakistan, empathy in Pakistani culture, Pakistan emotional landscape, The Bridge of Mountains identity, EmotionDeck cultural psychology, Pakistani emotion and heritage, psychology of empathy Pakistan, EmotionDeck identity bridge",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/pakistan",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Pakistan",
    description: "Pakistan's emotional archetype - The Unknown Soul. It embodies profound mystery and uncharted depths, unveiling layers of resilience, longing, and silent strength.",
    url: "https://emotiondeck.com/encyclopedia/pakistan",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Pakistan - The Bridge of Mountains | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Pakistan (The Bridge of Mountains)",
    description: "Pakistan's emotional archetype - The Unknown Soul. It embodies profound mystery and uncharted depths, unveiling layers of resilience, longing, and silent strength.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function PakistanLayout({ children }) {
  return <>{children}</>;
}

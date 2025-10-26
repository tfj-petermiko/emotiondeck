
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Lebanon",
  description: "Lebanon's emotional archetype - The Unknown Soul. It embodies hidden depths and unspoken truths, inviting a journey through mystery, longing, and profound connection.",
  keywords: "EmotionDeck Lebanon, The Voice of Faith, Lebanese resilience, ancient cedars symbolism, emotional culture Lebanon, Lebanese psychology, Jungian archetypes Lebanon, national identity Lebanon, poetic symbolism, Lebanese empathy, cultural symbolism, emotional heritage, Middle Eastern psyche, symbolic national identity, resilience in adversity, Lebanon emotional narrative, cedar tree symbolism, timeless hymn Lebanon",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/lebanon",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Lebanon",
    description: "Lebanon's emotional archetype - The Unknown Soul. It embodies hidden depths and unspoken truths, inviting a journey through mystery, longing, and profound connection.",
    url: "https://emotiondeck.com/encyclopedia/lebanon",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Lebanon - The Voice of Faith | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Lebanon (The Voice of Faith)",
    description: "Lebanon's emotional archetype - The Unknown Soul. It embodies hidden depths and unspoken truths, inviting a journey through mystery, longing, and profound connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function LebanonLayout({ children }) {
  return <>{children}</>;
}

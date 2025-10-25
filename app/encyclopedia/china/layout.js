
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - China",
  description:
    "Explore China’s emotional archetype - The Philosopher of Harmony. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck China, China archetype, The Philosopher of Harmony, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/china",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - China",
    description:
      "Journey through China’s emotional identity — The Philosopher of Harmony, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/china",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/china_preview.webp",
        width: 1200,
        height: 630,
        alt: "China - The Philosopher of Harmony | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — China (The Philosopher of Harmony)",
    description:
      "Discover China’s emotional essence through the archetype The Philosopher of Harmony.",
    images: ["/private_images/encyclopedia/countries/china_preview.webp"],
  },
};

export default function ChinaLayout({ children }) {
  return <>{children}</>;
}

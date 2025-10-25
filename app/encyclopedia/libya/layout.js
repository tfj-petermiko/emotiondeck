
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Libya",
  description:
    "Explore Libya’s emotional archetype - The Phoenix of Sand. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Libya, Libya archetype, The Phoenix of Sand, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/libya",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Libya",
    description:
      "Journey through Libya’s emotional identity — The Phoenix of Sand, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/libya",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/libya_preview.webp",
        width: 1200,
        height: 630,
        alt: "Libya - The Phoenix of Sand | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Libya (The Phoenix of Sand)",
    description:
      "Discover Libya’s emotional essence through the archetype The Phoenix of Sand.",
    images: ["/private_images/encyclopedia/countries/libya_preview.webp"],
  },
};

export default function LibyaLayout({ children }) {
  return <>{children}</>;
}

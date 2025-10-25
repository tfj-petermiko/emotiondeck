
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Lebanon",
  description:
    "Explore Lebanon’s emotional archetype - The Voice of Faith. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Lebanon, Lebanon archetype, The Voice of Faith, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/lebanon",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Lebanon",
    description:
      "Journey through Lebanon’s emotional identity — The Voice of Faith, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/lebanon",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/lebanon_preview.webp",
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
    description:
      "Discover Lebanon’s emotional essence through the archetype The Voice of Faith.",
    images: ["/private_images/encyclopedia/countries/lebanon_preview.webp"],
  },
};

export default function LebanonLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Qatar",
  description:
    "Explore Qatar’s emotional archetype - The Song of Sands. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Qatar, Qatar archetype, The Song of Sands, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/qatar",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Qatar",
    description:
      "Journey through Qatar’s emotional identity — The Song of Sands, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/qatar",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/qatar_preview.webp",
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
    description:
      "Discover Qatar’s emotional essence through the archetype The Song of Sands.",
    images: ["/private_images/encyclopedia/countries/qatar_preview.webp"],
  },
};

export default function QatarLayout({ children }) {
  return <>{children}</>;
}

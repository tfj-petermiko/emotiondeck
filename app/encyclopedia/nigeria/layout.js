
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Nigeria",
  description:
    "Explore Nigeria’s emotional archetype - The River Healer. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Nigeria, Nigeria archetype, The River Healer, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/nigeria",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Nigeria",
    description:
      "Journey through Nigeria’s emotional identity — The River Healer, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/nigeria",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/nigeria_preview.webp",
        width: 1200,
        height: 630,
        alt: "Nigeria - The River Healer | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Nigeria (The River Healer)",
    description:
      "Discover Nigeria’s emotional essence through the archetype The River Healer.",
    images: ["/private_images/encyclopedia/countries/nigeria_preview.webp"],
  },
};

export default function NigeriaLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Albania",
  description:
    "Explore Albania’s emotional archetype - The Guardian of Honour. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Albania, Albania archetype, The Guardian of Honour, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/albania",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Albania",
    description:
      "Journey through Albania’s emotional identity — The Guardian of Honour, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/albania",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/albania_preview.webp",
        width: 1200,
        height: 630,
        alt: "Albania - The Guardian of Honour | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Albania (The Guardian of Honour)",
    description:
      "Discover Albania’s emotional essence through the archetype The Guardian of Honour.",
    images: ["/private_images/encyclopedia/countries/albania_preview.webp"],
  },
};

export default function AlbaniaLayout({ children }) {
  return <>{children}</>;
}

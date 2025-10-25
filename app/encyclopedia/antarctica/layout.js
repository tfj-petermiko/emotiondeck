
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Antarctica",
  description:
    "Explore Antarctica’s emotional archetype - The Keeper of Ice. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Antarctica, Antarctica archetype, The Keeper of Ice, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/antarctica",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Antarctica",
    description:
      "Journey through Antarctica’s emotional identity — The Keeper of Ice, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/antarctica",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/antarctica_preview.webp",
        width: 1200,
        height: 630,
        alt: "Antarctica - The Keeper of Ice | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Antarctica (The Keeper of Ice)",
    description:
      "Discover Antarctica’s emotional essence through the archetype The Keeper of Ice.",
    images: ["/private_images/encyclopedia/countries/antarctica_preview.webp"],
  },
};

export default function AntarcticaLayout({ children }) {
  return <>{children}</>;
}

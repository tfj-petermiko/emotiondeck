
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - United Arab Emirates",
  description:
    "Explore United Arab Emirates’s emotional archetype - The Spirit of Water. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck United Arab Emirates, United Arab Emirates archetype, The Spirit of Water, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/united-arab-emirates",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - United Arab Emirates",
    description:
      "Journey through United Arab Emirates’s emotional identity — The Spirit of Water, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/united-arab-emirates",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "United Arab Emirates - The Spirit of Water | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — United Arab Emirates (The Spirit of Water)",
    description:
      "Discover United Arab Emirates’s emotional essence through the archetype The Spirit of Water.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function UnitedArabEmiratesLayout({ children }) {
  return <>{children}</>;
}

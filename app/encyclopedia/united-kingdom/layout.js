
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - United Kingdom",
  description:
    "Explore United Kingdom’s emotional archetype - The Stoic Visionary. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck United Kingdom, United Kingdom archetype, The Stoic Visionary, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/united-kingdom",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - United Kingdom",
    description:
      "Journey through United Kingdom’s emotional identity — The Stoic Visionary, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/united-kingdom",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "United Kingdom - The Stoic Visionary | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — United Kingdom (The Stoic Visionary)",
    description:
      "Discover United Kingdom’s emotional essence through the archetype The Stoic Visionary.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function UnitedKingdomLayout({ children }) {
  return <>{children}</>;
}

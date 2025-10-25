
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Bahrain",
  description:
    "Explore Bahrain’s emotional archetype - The Dawn Bridge. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Bahrain, Bahrain archetype, The Dawn Bridge, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/bahrain",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Bahrain",
    description:
      "Journey through Bahrain’s emotional identity — The Dawn Bridge, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/bahrain",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/bahrain_preview.webp",
        width: 1200,
        height: 630,
        alt: "Bahrain - The Dawn Bridge | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Bahrain (The Dawn Bridge)",
    description:
      "Discover Bahrain’s emotional essence through the archetype The Dawn Bridge.",
    images: ["/private_images/encyclopedia/countries/bahrain_preview.webp"],
  },
};

export default function BahrainLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Bosnia and Herzegovina",
  description:
    "Explore Bosnia and Herzegovina’s emotional archetype - The Bridgekeeper. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Bosnia and Herzegovina, Bosnia and Herzegovina archetype, The Bridgekeeper, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/bosnia-and-herzegovina",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Bosnia and Herzegovina",
    description:
      "Journey through Bosnia and Herzegovina’s emotional identity — The Bridgekeeper, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/bosnia-and-herzegovina",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/bosnia_and_herzegovina_preview.webp",
        width: 1200,
        height: 630,
        alt: "Bosnia and Herzegovina - The Bridgekeeper | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Bosnia and Herzegovina (The Bridgekeeper)",
    description:
      "Discover Bosnia and Herzegovina’s emotional essence through the archetype The Bridgekeeper.",
    images: ["/private_images/encyclopedia/countries/bosnia_and_herzegovina_preview.webp"],
  },
};

export default function BosniaandHerzegovinaLayout({ children }) {
  return <>{children}</>;
}

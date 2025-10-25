
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - British Virgin Islands",
  description:
    "Explore British Virgin Islands’s emotional archetype - The Ocean Child. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck British Virgin Islands, British Virgin Islands archetype, The Ocean Child, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/british-virgin-islands",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - British Virgin Islands",
    description:
      "Journey through British Virgin Islands’s emotional identity — The Ocean Child, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/british-virgin-islands",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/british_virgin_islands_preview.webp",
        width: 1200,
        height: 630,
        alt: "British Virgin Islands - The Ocean Child | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — British Virgin Islands (The Ocean Child)",
    description:
      "Discover British Virgin Islands’s emotional essence through the archetype The Ocean Child.",
    images: ["/private_images/encyclopedia/countries/british_virgin_islands_preview.webp"],
  },
};

export default function BritishVirginIslandsLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - San Marino",
  description:
    "Explore San Marino’s emotional archetype - The Timeless Custodian. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck San Marino, San Marino archetype, The Timeless Custodian, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/san-marino",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - San Marino",
    description:
      "Journey through San Marino’s emotional identity — The Timeless Custodian, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/san-marino",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/san_marino_preview.webp",
        width: 1200,
        height: 630,
        alt: "San Marino - The Timeless Custodian | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — San Marino (The Timeless Custodian)",
    description:
      "Discover San Marino’s emotional essence through the archetype The Timeless Custodian.",
    images: ["/private_images/encyclopedia/countries/san_marino_preview.webp"],
  },
};

export default function SanMarinoLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Sri Lanka",
  description:
    "Explore Sri Lanka’s emotional archetype - The Tranquil Visionary. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Sri Lanka, Sri Lanka archetype, The Tranquil Visionary, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/sri-lanka",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Sri Lanka",
    description:
      "Journey through Sri Lanka’s emotional identity — The Tranquil Visionary, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/sri-lanka",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/sri_lanka_preview.webp",
        width: 1200,
        height: 630,
        alt: "Sri Lanka - The Tranquil Visionary | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Sri Lanka (The Tranquil Visionary)",
    description:
      "Discover Sri Lanka’s emotional essence through the archetype The Tranquil Visionary.",
    images: ["/private_images/encyclopedia/countries/sri_lanka_preview.webp"],
  },
};

export default function SriLankaLayout({ children }) {
  return <>{children}</>;
}

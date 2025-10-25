
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Tunisia",
  description:
    "Explore Tunisia’s emotional archetype - The Inner Oasis. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Tunisia, Tunisia archetype, The Inner Oasis, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/tunisia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Tunisia",
    description:
      "Journey through Tunisia’s emotional identity — The Inner Oasis, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/tunisia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/tunisia_preview.webp",
        width: 1200,
        height: 630,
        alt: "Tunisia - The Inner Oasis | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Tunisia (The Inner Oasis)",
    description:
      "Discover Tunisia’s emotional essence through the archetype The Inner Oasis.",
    images: ["/private_images/encyclopedia/countries/tunisia_preview.webp"],
  },
};

export default function TunisiaLayout({ children }) {
  return <>{children}</>;
}

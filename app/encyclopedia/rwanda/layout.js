
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Rwanda",
  description:
    "Explore Rwanda’s emotional archetype - The Mountain of Silence. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Rwanda, Rwanda archetype, The Mountain of Silence, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/rwanda",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Rwanda",
    description:
      "Journey through Rwanda’s emotional identity — The Mountain of Silence, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/rwanda",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/rwanda_preview.webp",
        width: 1200,
        height: 630,
        alt: "Rwanda - The Mountain of Silence | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Rwanda (The Mountain of Silence)",
    description:
      "Discover Rwanda’s emotional essence through the archetype The Mountain of Silence.",
    images: ["/private_images/encyclopedia/countries/rwanda_preview.webp"],
  },
};

export default function RwandaLayout({ children }) {
  return <>{children}</>;
}

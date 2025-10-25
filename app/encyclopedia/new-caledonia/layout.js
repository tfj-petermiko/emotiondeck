
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - New Caledonia",
  description:
    "Explore New Caledonia’s emotional archetype - The Dream of Sky. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck New Caledonia, New Caledonia archetype, The Dream of Sky, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/new-caledonia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - New Caledonia",
    description:
      "Journey through New Caledonia’s emotional identity — The Dream of Sky, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/new-caledonia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/new_caledonia_preview.webp",
        width: 1200,
        height: 630,
        alt: "New Caledonia - The Dream of Sky | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — New Caledonia (The Dream of Sky)",
    description:
      "Discover New Caledonia’s emotional essence through the archetype The Dream of Sky.",
    images: ["/private_images/encyclopedia/countries/new_caledonia_preview.webp"],
  },
};

export default function NewCaledoniaLayout({ children }) {
  return <>{children}</>;
}

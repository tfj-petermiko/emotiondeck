
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Serbia",
  description:
    "Explore Serbia’s emotional archetype - The Defiant Spirit. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Serbia, Serbia archetype, The Defiant Spirit, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/serbia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Serbia",
    description:
      "Journey through Serbia’s emotional identity — The Defiant Spirit, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/serbia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/serbia_preview.webp",
        width: 1200,
        height: 630,
        alt: "Serbia - The Defiant Spirit | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Serbia (The Defiant Spirit)",
    description:
      "Discover Serbia’s emotional essence through the archetype The Defiant Spirit.",
    images: ["/private_images/encyclopedia/countries/serbia_preview.webp"],
  },
};

export default function SerbiaLayout({ children }) {
  return <>{children}</>;
}

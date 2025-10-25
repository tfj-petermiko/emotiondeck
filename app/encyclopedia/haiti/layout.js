
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Haiti",
  description:
    "Explore Haiti’s emotional archetype - The Resilient Islander. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Haiti, Haiti archetype, The Resilient Islander, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/haiti",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Haiti",
    description:
      "Journey through Haiti’s emotional identity — The Resilient Islander, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/haiti",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/haiti_preview.webp",
        width: 1200,
        height: 630,
        alt: "Haiti - The Resilient Islander | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Haiti (The Resilient Islander)",
    description:
      "Discover Haiti’s emotional essence through the archetype The Resilient Islander.",
    images: ["/private_images/encyclopedia/countries/haiti_preview.webp"],
  },
};

export default function HaitiLayout({ children }) {
  return <>{children}</>;
}

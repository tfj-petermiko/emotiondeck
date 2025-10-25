
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Slovenia",
  description:
    "Explore Slovenia’s emotional archetype - The Gentle Mediator. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Slovenia, Slovenia archetype, The Gentle Mediator, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/slovenia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Slovenia",
    description:
      "Journey through Slovenia’s emotional identity — The Gentle Mediator, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/slovenia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/slovenia_preview.webp",
        width: 1200,
        height: 630,
        alt: "Slovenia - The Gentle Mediator | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Slovenia (The Gentle Mediator)",
    description:
      "Discover Slovenia’s emotional essence through the archetype The Gentle Mediator.",
    images: ["/private_images/encyclopedia/countries/slovenia_preview.webp"],
  },
};

export default function SloveniaLayout({ children }) {
  return <>{children}</>;
}

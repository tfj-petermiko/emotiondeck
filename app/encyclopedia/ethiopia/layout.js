
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Ethiopia",
  description:
    "Explore Ethiopia’s emotional archetype - The Spirit of Dawn. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Ethiopia, Ethiopia archetype, The Spirit of Dawn, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/ethiopia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Ethiopia",
    description:
      "Journey through Ethiopia’s emotional identity — The Spirit of Dawn, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/ethiopia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/ethiopia_preview.webp",
        width: 1200,
        height: 630,
        alt: "Ethiopia - The Spirit of Dawn | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Ethiopia (The Spirit of Dawn)",
    description:
      "Discover Ethiopia’s emotional essence through the archetype The Spirit of Dawn.",
    images: ["/private_images/encyclopedia/countries/ethiopia_preview.webp"],
  },
};

export default function EthiopiaLayout({ children }) {
  return <>{children}</>;
}

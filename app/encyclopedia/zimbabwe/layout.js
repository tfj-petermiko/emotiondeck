
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Zimbabwe",
  description:
    "Explore Zimbabwe’s emotional archetype - The Child of Rain. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Zimbabwe, Zimbabwe archetype, The Child of Rain, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/zimbabwe",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Zimbabwe",
    description:
      "Journey through Zimbabwe’s emotional identity — The Child of Rain, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/zimbabwe",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/zimbabwe_preview.webp",
        width: 1200,
        height: 630,
        alt: "Zimbabwe - The Child of Rain | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Zimbabwe (The Child of Rain)",
    description:
      "Discover Zimbabwe’s emotional essence through the archetype The Child of Rain.",
    images: ["/private_images/encyclopedia/countries/zimbabwe_preview.webp"],
  },
};

export default function ZimbabweLayout({ children }) {
  return <>{children}</>;
}

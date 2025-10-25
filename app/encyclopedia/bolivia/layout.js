
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Bolivia",
  description:
    "Explore Bolivia’s emotional archetype - The Voice of Wind. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Bolivia, Bolivia archetype, The Voice of Wind, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/bolivia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Bolivia",
    description:
      "Journey through Bolivia’s emotional identity — The Voice of Wind, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/bolivia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/bolivia_preview.webp",
        width: 1200,
        height: 630,
        alt: "Bolivia - The Voice of Wind | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Bolivia (The Voice of Wind)",
    description:
      "Discover Bolivia’s emotional essence through the archetype The Voice of Wind.",
    images: ["/private_images/encyclopedia/countries/bolivia_preview.webp"],
  },
};

export default function BoliviaLayout({ children }) {
  return <>{children}</>;
}

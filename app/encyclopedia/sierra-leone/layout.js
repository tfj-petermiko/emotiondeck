
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Sierra Leone",
  description:
    "Explore Sierra Leone’s emotional archetype - The Child of Strength. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Sierra Leone, Sierra Leone archetype, The Child of Strength, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/sierra-leone",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Sierra Leone",
    description:
      "Journey through Sierra Leone’s emotional identity — The Child of Strength, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/sierra-leone",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/sierra_leone_preview.webp",
        width: 1200,
        height: 630,
        alt: "Sierra Leone - The Child of Strength | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Sierra Leone (The Child of Strength)",
    description:
      "Discover Sierra Leone’s emotional essence through the archetype The Child of Strength.",
    images: ["/private_images/encyclopedia/countries/sierra_leone_preview.webp"],
  },
};

export default function SierraLeoneLayout({ children }) {
  return <>{children}</>;
}

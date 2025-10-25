
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Iceland",
  description:
    "Explore Iceland’s emotional archetype - The Mythkeeper. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Iceland, Iceland archetype, The Mythkeeper, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/iceland",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Iceland",
    description:
      "Journey through Iceland’s emotional identity — The Mythkeeper, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/iceland",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/iceland_preview.webp",
        width: 1200,
        height: 630,
        alt: "Iceland - The Mythkeeper | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Iceland (The Mythkeeper)",
    description:
      "Discover Iceland’s emotional essence through the archetype The Mythkeeper.",
    images: ["/private_images/encyclopedia/countries/iceland_preview.webp"],
  },
};

export default function IcelandLayout({ children }) {
  return <>{children}</>;
}

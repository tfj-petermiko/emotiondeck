
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Honduras",
  description:
    "Explore Honduras’s emotional archetype - The Dream Walker. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Honduras, Honduras archetype, The Dream Walker, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/honduras",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Honduras",
    description:
      "Journey through Honduras’s emotional identity — The Dream Walker, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/honduras",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Honduras - The Dream Walker | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Honduras (The Dream Walker)",
    description:
      "Discover Honduras’s emotional essence through the archetype The Dream Walker.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function HondurasLayout({ children }) {
  return <>{children}</>;
}

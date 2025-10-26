
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Guernsey",
  description:
    "Explore Guernsey’s emotional archetype - The Ocean Listener. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Guernsey, Guernsey archetype, The Ocean Listener, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/guernsey",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Guernsey",
    description:
      "Journey through Guernsey’s emotional identity — The Ocean Listener, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/guernsey",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Guernsey - The Ocean Listener | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Guernsey (The Ocean Listener)",
    description:
      "Discover Guernsey’s emotional essence through the archetype The Ocean Listener.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function GuernseyLayout({ children }) {
  return <>{children}</>;
}

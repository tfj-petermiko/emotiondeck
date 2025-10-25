
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Iran",
  description:
    "Explore Iran’s emotional archetype - The Pilgrim of Faith. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Iran, Iran archetype, The Pilgrim of Faith, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/iran",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Iran",
    description:
      "Journey through Iran’s emotional identity — The Pilgrim of Faith, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/iran",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/iran_preview.webp",
        width: 1200,
        height: 630,
        alt: "Iran - The Pilgrim of Faith | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Iran (The Pilgrim of Faith)",
    description:
      "Discover Iran’s emotional essence through the archetype The Pilgrim of Faith.",
    images: ["/private_images/encyclopedia/countries/iran_preview.webp"],
  },
};

export default function IranLayout({ children }) {
  return <>{children}</>;
}

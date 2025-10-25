
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Lithuania",
  description:
    "Explore Lithuania’s emotional archetype - The Memory Keeper. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Lithuania, Lithuania archetype, The Memory Keeper, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/lithuania",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Lithuania",
    description:
      "Journey through Lithuania’s emotional identity — The Memory Keeper, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/lithuania",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/lithuania_preview.webp",
        width: 1200,
        height: 630,
        alt: "Lithuania - The Memory Keeper | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Lithuania (The Memory Keeper)",
    description:
      "Discover Lithuania’s emotional essence through the archetype The Memory Keeper.",
    images: ["/private_images/encyclopedia/countries/lithuania_preview.webp"],
  },
};

export default function LithuaniaLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Latvia",
  description:
    "Explore Latvia’s emotional archetype - The Melodic Guardian. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Latvia, Latvia archetype, The Melodic Guardian, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/latvia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Latvia",
    description:
      "Journey through Latvia’s emotional identity — The Melodic Guardian, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/latvia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/latvia_preview.webp",
        width: 1200,
        height: 630,
        alt: "Latvia - The Melodic Guardian | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Latvia (The Melodic Guardian)",
    description:
      "Discover Latvia’s emotional essence through the archetype The Melodic Guardian.",
    images: ["/private_images/encyclopedia/countries/latvia_preview.webp"],
  },
};

export default function LatviaLayout({ children }) {
  return <>{children}</>;
}

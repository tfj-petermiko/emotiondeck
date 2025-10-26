
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Western Sahara",
  description:
    "Explore Western Sahara’s emotional archetype - The Desert Soul. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Western Sahara, Western Sahara archetype, The Desert Soul, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/western-sahara",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Western Sahara",
    description:
      "Journey through Western Sahara’s emotional identity — The Desert Soul, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/western-sahara",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Western Sahara - The Desert Soul | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Western Sahara (The Desert Soul)",
    description:
      "Discover Western Sahara’s emotional essence through the archetype The Desert Soul.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function WesternSaharaLayout({ children }) {
  return <>{children}</>;
}

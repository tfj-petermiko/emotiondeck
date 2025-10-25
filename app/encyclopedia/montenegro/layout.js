
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Montenegro",
  description:
    "Explore Montenegro’s emotional archetype - The Silent Warrior. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Montenegro, Montenegro archetype, The Silent Warrior, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/montenegro",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Montenegro",
    description:
      "Journey through Montenegro’s emotional identity — The Silent Warrior, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/montenegro",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/montenegro_preview.webp",
        width: 1200,
        height: 630,
        alt: "Montenegro - The Silent Warrior | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Montenegro (The Silent Warrior)",
    description:
      "Discover Montenegro’s emotional essence through the archetype The Silent Warrior.",
    images: ["/private_images/encyclopedia/countries/montenegro_preview.webp"],
  },
};

export default function MontenegroLayout({ children }) {
  return <>{children}</>;
}

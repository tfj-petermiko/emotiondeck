
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - France",
  description:
    "Explore France’s emotional archetype - The Aesthetic Rebel. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck France, France archetype, The Aesthetic Rebel, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/france",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - France",
    description:
      "Journey through France’s emotional identity — The Aesthetic Rebel, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/france",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/france_preview.webp",
        width: 1200,
        height: 630,
        alt: "France - The Aesthetic Rebel | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — France (The Aesthetic Rebel)",
    description:
      "Discover France’s emotional essence through the archetype The Aesthetic Rebel.",
    images: ["/private_images/encyclopedia/countries/france_preview.webp"],
  },
};

export default function FranceLayout({ children }) {
  return <>{children}</>;
}

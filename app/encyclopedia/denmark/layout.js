
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Denmark",
  description:
    "Explore Denmark’s emotional archetype - The Joyful Minimalist. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Denmark, Denmark archetype, The Joyful Minimalist, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/denmark",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Denmark",
    description:
      "Journey through Denmark’s emotional identity — The Joyful Minimalist, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/denmark",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/denmark_preview.webp",
        width: 1200,
        height: 630,
        alt: "Denmark - The Joyful Minimalist | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Denmark (The Joyful Minimalist)",
    description:
      "Discover Denmark’s emotional essence through the archetype The Joyful Minimalist.",
    images: ["/private_images/encyclopedia/countries/denmark_preview.webp"],
  },
};

export default function DenmarkLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Pakistan",
  description:
    "Explore Pakistan’s emotional archetype - The Bridge of Mountains. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Pakistan, Pakistan archetype, The Bridge of Mountains, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/pakistan",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Pakistan",
    description:
      "Journey through Pakistan’s emotional identity — The Bridge of Mountains, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/pakistan",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/pakistan_preview.webp",
        width: 1200,
        height: 630,
        alt: "Pakistan - The Bridge of Mountains | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Pakistan (The Bridge of Mountains)",
    description:
      "Discover Pakistan’s emotional essence through the archetype The Bridge of Mountains.",
    images: ["/private_images/encyclopedia/countries/pakistan_preview.webp"],
  },
};

export default function PakistanLayout({ children }) {
  return <>{children}</>;
}

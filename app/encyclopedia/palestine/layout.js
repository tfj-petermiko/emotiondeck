
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Palestine",
  description:
    "Explore Palestine’s emotional archetype - The Spirit of Endurance. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Palestine, Palestine archetype, The Spirit of Endurance, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/palestine",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Palestine",
    description:
      "Journey through Palestine’s emotional identity — The Spirit of Endurance, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/palestine",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/palestine_preview.webp",
        width: 1200,
        height: 630,
        alt: "Palestine - The Spirit of Endurance | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Palestine (The Spirit of Endurance)",
    description:
      "Discover Palestine’s emotional essence through the archetype The Spirit of Endurance.",
    images: ["/private_images/encyclopedia/countries/palestine_preview.webp"],
  },
};

export default function PalestineLayout({ children }) {
  return <>{children}</>;
}

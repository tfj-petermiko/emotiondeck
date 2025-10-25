
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Melilla",
  description:
    "Explore Melilla’s emotional archetype - The Eternal Watcher. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Melilla, Melilla archetype, The Eternal Watcher, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/melilla",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Melilla",
    description:
      "Journey through Melilla’s emotional identity — The Eternal Watcher, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/melilla",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/melilla_preview.webp",
        width: 1200,
        height: 630,
        alt: "Melilla - The Eternal Watcher | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Melilla (The Eternal Watcher)",
    description:
      "Discover Melilla’s emotional essence through the archetype The Eternal Watcher.",
    images: ["/private_images/encyclopedia/countries/melilla_preview.webp"],
  },
};

export default function MelillaLayout({ children }) {
  return <>{children}</>;
}

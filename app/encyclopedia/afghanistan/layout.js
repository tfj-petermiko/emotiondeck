
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Afghanistan",
  description:
    "Explore Afghanistan’s emotional archetype - The Eternal Compass. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Afghanistan, Afghanistan archetype, The Eternal Compass, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/afghanistan",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Afghanistan",
    description:
      "Journey through Afghanistan’s emotional identity — The Eternal Compass, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/afghanistan",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/afghanistan_preview.webp",
        width: 1200,
        height: 630,
        alt: "Afghanistan - The Eternal Compass | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Afghanistan (The Eternal Compass)",
    description:
      "Discover Afghanistan’s emotional essence through the archetype The Eternal Compass.",
    images: ["/private_images/encyclopedia/countries/afghanistan_preview.webp"],
  },
};

export default function AfghanistanLayout({ children }) {
  return <>{children}</>;
}

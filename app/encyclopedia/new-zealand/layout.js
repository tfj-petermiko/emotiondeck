
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - New Zealand",
  description:
    "Explore New Zealand’s emotional archetype - The Spirit of Waves. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck New Zealand, New Zealand archetype, The Spirit of Waves, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/new-zealand",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - New Zealand",
    description:
      "Journey through New Zealand’s emotional identity — The Spirit of Waves, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/new-zealand",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/new_zealand_preview.webp",
        width: 1200,
        height: 630,
        alt: "New Zealand - The Spirit of Waves | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — New Zealand (The Spirit of Waves)",
    description:
      "Discover New Zealand’s emotional essence through the archetype The Spirit of Waves.",
    images: ["/private_images/encyclopedia/countries/new_zealand_preview.webp"],
  },
};

export default function NewZealandLayout({ children }) {
  return <>{children}</>;
}

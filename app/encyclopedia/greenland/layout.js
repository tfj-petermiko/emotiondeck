
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Greenland",
  description:
    "Explore Greenland’s emotional archetype - The Spirit of Calm. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Greenland, Greenland archetype, The Spirit of Calm, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/greenland",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Greenland",
    description:
      "Journey through Greenland’s emotional identity — The Spirit of Calm, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/greenland",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/greenland_preview.webp",
        width: 1200,
        height: 630,
        alt: "Greenland - The Spirit of Calm | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Greenland (The Spirit of Calm)",
    description:
      "Discover Greenland’s emotional essence through the archetype The Spirit of Calm.",
    images: ["/private_images/encyclopedia/countries/greenland_preview.webp"],
  },
};

export default function GreenlandLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Tokelau",
  description:
    "Explore Tokelau’s emotional archetype - The Silent Ocean. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Tokelau, Tokelau archetype, The Silent Ocean, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/tokelau",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Tokelau",
    description:
      "Journey through Tokelau’s emotional identity — The Silent Ocean, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/tokelau",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Tokelau - The Silent Ocean | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Tokelau (The Silent Ocean)",
    description:
      "Discover Tokelau’s emotional essence through the archetype The Silent Ocean.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function TokelauLayout({ children }) {
  return <>{children}</>;
}

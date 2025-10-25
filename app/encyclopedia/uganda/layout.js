
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Uganda",
  description:
    "Explore Uganda’s emotional archetype - The Soul Weaver. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Uganda, Uganda archetype, The Soul Weaver, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/uganda",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Uganda",
    description:
      "Journey through Uganda’s emotional identity — The Soul Weaver, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/uganda",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/uganda_preview.webp",
        width: 1200,
        height: 630,
        alt: "Uganda - The Soul Weaver | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Uganda (The Soul Weaver)",
    description:
      "Discover Uganda’s emotional essence through the archetype The Soul Weaver.",
    images: ["/private_images/encyclopedia/countries/uganda_preview.webp"],
  },
};

export default function UgandaLayout({ children }) {
  return <>{children}</>;
}

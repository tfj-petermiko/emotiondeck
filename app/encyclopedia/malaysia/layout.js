
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Malaysia",
  description:
    "Explore Malaysia’s emotional archetype - The Horizon Seer. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Malaysia, Malaysia archetype, The Horizon Seer, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/malaysia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Malaysia",
    description:
      "Journey through Malaysia’s emotional identity — The Horizon Seer, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/malaysia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/malaysia_preview.webp",
        width: 1200,
        height: 630,
        alt: "Malaysia - The Horizon Seer | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Malaysia (The Horizon Seer)",
    description:
      "Discover Malaysia’s emotional essence through the archetype The Horizon Seer.",
    images: ["/private_images/encyclopedia/countries/malaysia_preview.webp"],
  },
};

export default function MalaysiaLayout({ children }) {
  return <>{children}</>;
}

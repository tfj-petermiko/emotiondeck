
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Uruguay",
  description:
    "Explore Uruguay’s emotional archetype - The Spirit of Balance. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Uruguay, Uruguay archetype, The Spirit of Balance, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/uruguay",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Uruguay",
    description:
      "Journey through Uruguay’s emotional identity — The Spirit of Balance, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/uruguay",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/uruguay_preview.webp",
        width: 1200,
        height: 630,
        alt: "Uruguay - The Spirit of Balance | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Uruguay (The Spirit of Balance)",
    description:
      "Discover Uruguay’s emotional essence through the archetype The Spirit of Balance.",
    images: ["/private_images/encyclopedia/countries/uruguay_preview.webp"],
  },
};

export default function UruguayLayout({ children }) {
  return <>{children}</>;
}

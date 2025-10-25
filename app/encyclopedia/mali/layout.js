
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Mali",
  description:
    "Explore Mali’s emotional archetype - The Protector of Ancestors. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Mali, Mali archetype, The Protector of Ancestors, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/mali",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Mali",
    description:
      "Journey through Mali’s emotional identity — The Protector of Ancestors, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/mali",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/mali_preview.webp",
        width: 1200,
        height: 630,
        alt: "Mali - The Protector of Ancestors | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Mali (The Protector of Ancestors)",
    description:
      "Discover Mali’s emotional essence through the archetype The Protector of Ancestors.",
    images: ["/private_images/encyclopedia/countries/mali_preview.webp"],
  },
};

export default function MaliLayout({ children }) {
  return <>{children}</>;
}

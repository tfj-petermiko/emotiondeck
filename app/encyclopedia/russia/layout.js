
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Russia",
  description:
    "Explore Russia’s emotional archetype - The Tragic Visionary. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Russia, Russia archetype, The Tragic Visionary, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/russia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Russia",
    description:
      "Journey through Russia’s emotional identity — The Tragic Visionary, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/russia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/russia_preview.webp",
        width: 1200,
        height: 630,
        alt: "Russia - The Tragic Visionary | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Russia (The Tragic Visionary)",
    description:
      "Discover Russia’s emotional essence through the archetype The Tragic Visionary.",
    images: ["/private_images/encyclopedia/countries/russia_preview.webp"],
  },
};

export default function RussiaLayout({ children }) {
  return <>{children}</>;
}

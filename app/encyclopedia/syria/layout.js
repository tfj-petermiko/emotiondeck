
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Syria",
  description:
    "Explore Syria’s emotional archetype - The Healer of Storms. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Syria, Syria archetype, The Healer of Storms, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/syria",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Syria",
    description:
      "Journey through Syria’s emotional identity — The Healer of Storms, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/syria",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/syria_preview.webp",
        width: 1200,
        height: 630,
        alt: "Syria - The Healer of Storms | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Syria (The Healer of Storms)",
    description:
      "Discover Syria’s emotional essence through the archetype The Healer of Storms.",
    images: ["/private_images/encyclopedia/countries/syria_preview.webp"],
  },
};

export default function SyriaLayout({ children }) {
  return <>{children}</>;
}

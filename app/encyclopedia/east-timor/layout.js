
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - East Timor",
  description:
    "Explore East Timor’s emotional archetype - The Keeper of Salt. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck East Timor, East Timor archetype, The Keeper of Salt, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/east-timor",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - East Timor",
    description:
      "Journey through East Timor’s emotional identity — The Keeper of Salt, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/east-timor",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/east_timor_preview.webp",
        width: 1200,
        height: 630,
        alt: "East Timor - The Keeper of Salt | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — East Timor (The Keeper of Salt)",
    description:
      "Discover East Timor’s emotional essence through the archetype The Keeper of Salt.",
    images: ["/private_images/encyclopedia/countries/east_timor_preview.webp"],
  },
};

export default function EastTimorLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Kenya",
  description:
    "Explore Kenya’s emotional archetype - The Visionary Drum. Discover its cultural essence and psychological meaning in the global emotional landscape.",
  keywords:
    "EmotionDeck Kenya, Kenya archetype, The Visionary Drum, Jungian archetypes, emotional culture, psychology, empathy, cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/kenya",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Kenya",
    description:
      "Journey through Kenya’s emotional identity — The Visionary Drum, symbolising the nation’s inner psyche and emotional history.",
    url: "https://emotiondeck.com/encyclopedia/kenya",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/encyclopedia/countries/kenya_preview.webp",
        width: 1200,
        height: 630,
        alt: "Kenya - The Visionary Drum | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Kenya (The Visionary Drum)",
    description:
      "Discover Kenya’s emotional essence through the archetype The Visionary Drum.",
    images: ["/private_images/encyclopedia/countries/kenya_preview.webp"],
  },
};

export default function KenyaLayout({ children }) {
  return <>{children}</>;
}

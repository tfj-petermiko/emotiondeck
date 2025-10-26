
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Palau",
  description: "Palau's emotional archetype - The Unknown Soul. It embodies deep mystery and uncharted depths, inviting reflection on the vastness of human connection and inner discovery.",
  keywords: "EmotionDeck Palau, The Dreaming Shell emotion, Palau culture and identity, emotion psychology Palau, empathy in Palau, Dreaming Shell psychology, Palau emotional identity, EmotionDeck empathy culture, Palau emotional landscapes, Dreaming Shell cultural emotion, Palau emotion and identity, psychology of The Dreaming Shell",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/palau",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Palau",
    description: "Palau's emotional archetype - The Unknown Soul. It embodies deep mystery and uncharted depths, inviting reflection on the vastness of human connection and inner discovery.",
    url: "https://emotiondeck.com/encyclopedia/palau",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Palau - The Dreaming Shell | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Palau (The Dreaming Shell)",
    description: "Palau's emotional archetype - The Unknown Soul. It embodies deep mystery and uncharted depths, inviting reflection on the vastness of human connection and inner discovery.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function PalauLayout({ children }) {
  return <>{children}</>;
}

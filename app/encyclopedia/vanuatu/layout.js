
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Vanuatu",
  description: "Vanuatu's emotional archetype - The Unknown Soul. It reflects profound mystery and depth, inviting a journey within to uncover hidden truths and unvoiced dreams.",
  keywords: "EmotionDeck Vanuatu emotions, The Silent Horizon empathy, Vanuatu cultural identity, EmotionDeck psychology Vanuatu, Silent Horizon emotional journey, Vanuatu emotional landscape, empathy and culture Vanuatu, EmotionDeck identity roots, Silent Horizon psychological depth, Vanuatu emotion and identity, cultural empathy EmotionDeck, psychology of Vanuatu emotions",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/vanuatu",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Vanuatu",
    description: "Vanuatu's emotional archetype - The Unknown Soul. It reflects profound mystery and depth, inviting a journey within to uncover hidden truths and unvoiced dreams.",
    url: "https://emotiondeck.com/encyclopedia/vanuatu",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Vanuatu - The Silent Horizon | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Vanuatu (The Silent Horizon)",
    description: "Vanuatu's emotional archetype - The Unknown Soul. It reflects profound mystery and depth, inviting a journey within to uncover hidden truths and unvoiced dreams.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function VanuatuLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Peru",
  description: "Peru’s emotional archetype - The Unknown Soul. It embodies hidden depths and whispered dreams, revealing a journey of introspection, mystery, and profound connection.",
  keywords: "EmotionDeck Peru soul of Andes, Peruvian emotion culture, Andes empathy psychology, EmotionDeck identity Peru, Soul of Andes emotion, Peru cultural psyche, Andes identity emotion, EmotionDeck empathy Peru, Peruvian psychological culture, Soul of Andes identity, Peru emotion psychology, EmotionDeck cultural empathy",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/peru",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Peru",
    description: "Peru’s emotional archetype - The Unknown Soul. It embodies hidden depths and whispered dreams, revealing a journey of introspection, mystery, and profound connection.",
    url: "https://emotiondeck.com/encyclopedia/peru",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Peru - The Soul of Andes | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Peru (The Soul of Andes)",
    description: "Peru’s emotional archetype - The Unknown Soul. It embodies hidden depths and whispered dreams, revealing a journey of introspection, mystery, and profound connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function PeruLayout({ children }) {
  return <>{children}</>;
}

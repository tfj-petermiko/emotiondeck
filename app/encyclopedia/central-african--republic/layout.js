
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Central African Republic",
  description: "Central African Republic's emotional archetype - The Unknown Soul. It embodies hidden depths and unspoken stories, revealing a tapestry of mystery, longing, and profound connection.",
  keywords: "EmotionDeck Central African Republic, The Hidden Light, Central African empathy, emotional culture CAR, Jungian archetypes CAR, symbolic resilience, national identity CAR, shadow and hope symbolism, Central African psychology, cultural symbolism CAR, emotional landscape CAR, quiet beacon metaphor, CAR emotional nuances, collective psyche CAR, poetic national identity, empathy and hope CAR, symbolic storytelling CAR",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/central-african-republic",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Central African Republic",
    description: "Central African Republic's emotional archetype - The Unknown Soul. It embodies hidden depths and unspoken stories, revealing a tapestry of mystery, longing, and profound connection.",
    url: "https://emotiondeck.com/encyclopedia/central-african-republic",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Central African Republic - The Hidden Light | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Central African Republic (The Hidden Light)",
    description: "Central African Republic's emotional archetype - The Unknown Soul. It embodies hidden depths and unspoken stories, revealing a tapestry of mystery, longing, and profound connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function CentralAfricanRepublicLayout({ children }) {
  return <>{children}</>;
}

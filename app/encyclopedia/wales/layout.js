
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Wales",
  description: "Wales' emotional archetype - The Unknown Soul. It embodies deep introspection and hidden depths, revealing a journey of self-discovery and profound connection.",
  keywords: "EmotionDeck Wales melodies, The Voice of Song emotion, Welsh culture empathy, identity through song Wales, psychology of Welsh emotion, EmotionDeck poetic Wales, empathic voice Wales, cultural identity in Wales, Welsh song psychology, EmotionDeck empathic culture, The Voice of Song identity, Wales emotional heritage",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/wales",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Wales",
    description: "Wales' emotional archetype - The Unknown Soul. It embodies deep introspection and hidden depths, revealing a journey of self-discovery and profound connection.",
    url: "https://emotiondeck.com/encyclopedia/wales",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Wales - The Voice of Song | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Wales (The Voice of Song)",
    description: "Wales' emotional archetype - The Unknown Soul. It embodies deep introspection and hidden depths, revealing a journey of self-discovery and profound connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function WalesLayout({ children }) {
  return <>{children}</>;
}

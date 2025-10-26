
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Puerto Rico",
  description: "Puerto Rico's emotional archetype - The Unknown Soul. It embodies hidden depths and lost histories, revealing a journey of identity, longing, and profound connection.",
  keywords: "EmotionDeck Puerto Rico, The Memory of Light emotions, Puerto Rico cultural identity, EmotionDeck empathy highlights, Puerto Rico psychology insights, Memory of Light and identity, EmotionDeck emotional culture, Puerto Rico emotional heritage, empathy in Puerto Rican culture, psychology of identity Puerto Rico, Memory of Light emotional journey, EmotionDeck cultural empathy",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/puerto-rico",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Puerto Rico",
    description: "Puerto Rico's emotional archetype - The Unknown Soul. It embodies hidden depths and lost histories, revealing a journey of identity, longing, and profound connection.",
    url: "https://emotiondeck.com/encyclopedia/puerto-rico",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Puerto Rico - The Memory of Light | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Puerto Rico (The Memory of Light)",
    description: "Puerto Rico's emotional archetype - The Unknown Soul. It embodies hidden depths and lost histories, revealing a journey of identity, longing, and profound connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function PuertoRicoLayout({ children }) {
  return <>{children}</>;
}

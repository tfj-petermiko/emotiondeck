
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Serbia",
  description: "Serbia's emotional archetype - The Unknown Soul. It embodies hidden depths and unspoken stories, revealing a tapestry of mystery, longing, and profound connection.",
  keywords: "EmotionDeck Serbia, The Defiant Spirit emotion, Serbian culture psychology, empathy in Serbia, emotional identity Serbia, Defiant Spirit psychology, EmotionDeck cultural identity, Serbia emotional heritage, empathy and identity Serbia, psychology of Defiant Spirit, EmotionDeck Serbia culture, Serbian emotional psychology",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/serbia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Serbia",
    description: "Serbia's emotional archetype - The Unknown Soul. It embodies hidden depths and unspoken stories, revealing a tapestry of mystery, longing, and profound connection.",
    url: "https://emotiondeck.com/encyclopedia/serbia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Serbia - The Defiant Spirit | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Serbia (The Defiant Spirit)",
    description: "Serbia's emotional archetype - The Unknown Soul. It embodies hidden depths and unspoken stories, revealing a tapestry of mystery, longing, and profound connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SerbiaLayout({ children }) {
  return <>{children}</>;
}

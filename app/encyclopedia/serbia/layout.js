
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Serbia",
  description: "Serbia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Serbia, The Defiant Spirit emotion, Serbian culture psychology, empathy in Serbia, emotional identity Serbia, Defiant Spirit psychology, EmotionDeck cultural identity, Serbia emotional heritage, empathy and identity Serbia, psychology of Defiant Spirit, EmotionDeck Serbia culture, Serbian emotional psychology",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/serbia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Serbia",
    description: "Serbia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
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
    description: "Serbia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SerbiaLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Vietnam",
  description: "Vietnam's emotional archetype - The Unknown Soul. It embodies hidden depths and unspoken stories, revealing a tapestry of longing, mystery, and profound connection.",
  keywords: "EmotionDeck Vietnam flow, Spirit of Flow culture, Vietnam emotional identity, empathy in Vietnam, psychology of Vietnamese emotion, EmotionDeck empathy Vietnam, Spirit of Flow psychology, Vietnamese cultural emotion, EmotionDeck identity Vietnam, flow and emotion Vietnam, Spirit of Flow empathy, Vietnam emotion psychology",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/vietnam",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Vietnam",
    description: "Vietnam's emotional archetype - The Unknown Soul. It embodies hidden depths and unspoken stories, revealing a tapestry of longing, mystery, and profound connection.",
    url: "https://emotiondeck.com/encyclopedia/vietnam",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Vietnam - The Spirit of Flow | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Vietnam (The Spirit of Flow)",
    description: "Vietnam's emotional archetype - The Unknown Soul. It embodies hidden depths and unspoken stories, revealing a tapestry of longing, mystery, and profound connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function VietnamLayout({ children }) {
  return <>{children}</>;
}

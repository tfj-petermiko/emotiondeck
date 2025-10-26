
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - South Africa",
  description: "South Africa's emotional archetype - The Unknown Soul. It embodies hidden depths and silent yearning, revealing a tapestry of mystery, connection, and profound introspection.",
  keywords: "EmotionDeck South Africa, The Compassionate Warrior emotion, South African culture empathy, emotion and identity South Africa, Compassionate Warrior psychology, EmotionDeck empathy South Africa, South Africa emotional identity, Compassionate Warrior culture, EmotionDeck psychology South Africa, South African emotion exploration, empathy and identity EmotionDeck, Compassionate Warrior emotional journey",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/south-africa",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - South Africa",
    description: "South Africa's emotional archetype - The Unknown Soul. It embodies hidden depths and silent yearning, revealing a tapestry of mystery, connection, and profound introspection.",
    url: "https://emotiondeck.com/encyclopedia/south-africa",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "South Africa - The Compassionate Warrior | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — South Africa (The Compassionate Warrior)",
    description: "South Africa's emotional archetype - The Unknown Soul. It embodies hidden depths and silent yearning, revealing a tapestry of mystery, connection, and profound introspection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SouthAfricaLayout({ children }) {
  return <>{children}</>;
}

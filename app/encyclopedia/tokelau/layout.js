
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Tokelau",
  description: "Tokelau's emotional archetype - The Unknown Soul. It embodies mystery and introspection, unveiling a journey through depth, connection, and the essence of being.",
  keywords: "EmotionDeck Tokelau waves, The Silent Ocean empathy, Tokelau cultural identity, emotion psychology Tokelau, Silent Ocean emotion deck, Tokelau emotion culture, empathy in Tokelau, psychology of The Silent Ocean, EmotionDeck cultural insights, Tokelau identity emotion, Silent Ocean emotional depth, Tokelau empathy psychology",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/tokelau",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Tokelau",
    description: "Tokelau's emotional archetype - The Unknown Soul. It embodies mystery and introspection, unveiling a journey through depth, connection, and the essence of being.",
    url: "https://emotiondeck.com/encyclopedia/tokelau",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Tokelau - The Silent Ocean | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Tokelau (The Silent Ocean)",
    description: "Tokelau's emotional archetype - The Unknown Soul. It embodies mystery and introspection, unveiling a journey through depth, connection, and the essence of being.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function TokelauLayout({ children }) {
  return <>{children}</>;
}

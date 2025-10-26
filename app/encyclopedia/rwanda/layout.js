
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Rwanda",
  description: "Rwanda's emotional archetype - The Unknown Soul. It reflects profound mystery and latent strength, unveiling depths of resilience, connection, and untold stories.",
  keywords: "EmotionDeck Rwanda emotion, The Mountain of Silence poetry, Rwandan culture and empathy, psychology of Rwanda, identity in The Mountain of Silence, emotion and culture Rwanda, Rwanda emotional heritage, The Mountain of Silence identity, empathy in Rwandan psychology, Rwanda emotion and identity, EmotionDeck cultural psychology, The Mountain of Silence emotion journey",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/rwanda",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Rwanda",
    description: "Rwanda's emotional archetype - The Unknown Soul. It reflects profound mystery and latent strength, unveiling depths of resilience, connection, and untold stories.",
    url: "https://emotiondeck.com/encyclopedia/rwanda",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Rwanda - The Mountain of Silence | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Rwanda (The Mountain of Silence)",
    description: "Rwanda's emotional archetype - The Unknown Soul. It reflects profound mystery and latent strength, unveiling depths of resilience, connection, and untold stories.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function RwandaLayout({ children }) {
  return <>{children}</>;
}

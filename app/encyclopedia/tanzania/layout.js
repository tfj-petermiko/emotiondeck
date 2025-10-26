
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Tanzania",
  description: "Tanzania's emotional archetype - The Unknown Soul. It embodies profound mystery and uncharted depths, inviting reflection on the beauty of unseen connections and hidden truths.",
  keywords: "EmotionDeck Tanzania, The Sacred Voice emotions, Tanzanian culture empathy, emotion psychology Tanzania, identity and emotion Tanzania, Sacred Voice cultural identity, EmotionDeck empathy insights, Tanzania emotional heritage, psychology of Tanzanian identity, emotion and culture Tanzania, empathy and identity Tanzania, The Sacred Voice emotion journey",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/tanzania",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Tanzania",
    description: "Tanzania's emotional archetype - The Unknown Soul. It embodies profound mystery and uncharted depths, inviting reflection on the beauty of unseen connections and hidden truths.",
    url: "https://emotiondeck.com/encyclopedia/tanzania",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Tanzania - The Sacred Voice | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Tanzania (The Sacred Voice)",
    description: "Tanzania's emotional archetype - The Unknown Soul. It embodies profound mystery and uncharted depths, inviting reflection on the beauty of unseen connections and hidden truths.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function TanzaniaLayout({ children }) {
  return <>{children}</>;
}

export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck — Phase 4: Children Collection | Emotional Development and Educational Study",
  description:
    "Explore EmotionDeck Phase 4: Children Collection — 84 ultra-realistic black-and-white portraits capturing authentic emotional expressions of children aged around 6–7 years. Designed for educational and psychological illustration, supporting emotion recognition, empathy, and early emotional development research.",
  openGraph: {
    title: "EmotionDeck — Phase 4: Children Collection",
    description:
      "Discover 84 detailed black-and-white portraits of children aged 6–7 expressing authentic emotions. EmotionDeck Phase 4 extends emotional perception research into early childhood education and empathy training.",
    url: "https://emotiondeck.com/free/phase-4",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck — Phase 4: Children Collection",
    description:
      "EmotionDeck Phase 4 presents 84 high-resolution portraits of children expressing core human emotions for education, psychology, and empathy development.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function Phase4Layout({ children }) {
  return <>{children}</>;
}

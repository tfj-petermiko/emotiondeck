export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Global Map — One World, Many Emotions",
  description:
    "Explore the EmotionDeck Global Map — an interactive emotional atlas that visualises how different cultures express, perceive, and interpret human emotions. Click on any country to uncover emotional insights, cultural influences, and shared human experiences across the world.",
  openGraph: {
    title: "EmotionDeck Global Map — One World, Many Emotions",
    description:
      "Discover how human emotions vary and connect across cultures with the interactive EmotionDeck Global Map — an educational exploration of emotional diversity worldwide.",
    url: "https://emotiondeck.com/globalmap",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Global Map — One World, Many Emotions",
    description:
      "Explore the interactive EmotionDeck Global Map and uncover how culture shapes emotion, expression, and empathy around the world.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function GlobalMapLayout({ children }) {
  return <>{children}</>;
}

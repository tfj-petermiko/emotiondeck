export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck — Phase 6: Evolution | One World, Many Feelings",
  description:
    "Explore EmotionDeck Phase 6: Evolution — a global emotional atlas portraying the evolution of human feelings across cultures, ages, and genders. Featuring over 300 ultra-realistic black-and-white portraits capturing the universality and diversity of human emotion.",
  openGraph: {
    title: "EmotionDeck — Phase 6: Evolution | One World, Many Feelings",
    description:
      "Discover EmotionDeck Phase 6: Evolution — a panoramic collection of human emotions expressed through culture, age, and gender. Experience the visual evolution of emotional expression across the globe.",
    url: "https://emotiondeck.com/free/phase-6",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck — Phase 6: Evolution | One World, Many Feelings",
    description:
      "EmotionDeck Phase 6: Evolution presents a global journey through emotional diversity — over 300 portraits revealing how humanity expresses universal feelings across time and culture.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function Phase6Layout({ children }) {
  return <>{children}</>;
}

export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  alternates: {
    canonical: "https://emotiondeck.com/pro/phase-6",
  },
  title:
    "EmotionDeck PRO — Phase 6: Evolution | One World, Many Feelings",
  description:
    "Explore EmotionDeck PRO Phase 6: Evolution — a global emotional atlas portraying the evolution of human feelings across cultures, ages, and genders. Featuring over 300 ultra-realistic black-and-white portraits capturing the universality and diversity of emotion.",
  keywords:
    "EmotionDeck, Evolution Collection, emotional evolution, cross-cultural emotions, emotional diversity, human emotion dataset, emotion across ages, empathy training, emotional intelligence, psychology of emotion, cultural anthropology, black-and-white portraits, emotion perception, visual emotion study, art and psychology",
  openGraph: {
    title: "EmotionDeck PRO — Phase 6: Evolution | One World, Many Feelings",
    description:
      "Discover EmotionDeck PRO Phase 6: Evolution — a panoramic collection of human emotions expressed through culture, age, and gender. Experience the visual evolution of emotional expression across the globe.",
    url: "https://emotiondeck.com/pro/phase-6",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview-phase6.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck PRO Phase 6 Evolution preview",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck PRO — Phase 6: Evolution | One World, Many Feelings",
    description:
      "EmotionDeck PRO Phase 6 explores emotional evolution across cultures and ages — a visual atlas of humanity’s shared and unique emotional expressions.",
    images: ["https://emotiondeck.com/preview-phase6.jpg"],
  },
};

export default function Phase6Layout({ children }) {
  return (
    <div className="relative z-0 overflow-visible min-h-screen bg-neutral-900 text-white font-sans">
      {children}
    </div>
  );
}

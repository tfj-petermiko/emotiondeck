export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  alternates: {
    canonical: "https://emotiondeck.com/pro/phase-3",
  },
  title: "EmotionDeck PRO — Phase 3: Young Adults | Advanced Emotion Perception Study",
  description:
    "Explore EmotionDeck PRO Phase 3: Young Adults — 96 ultra-realistic black and white portraits capturing authentic emotional expressions of people in their early twenties. Designed for advanced study, education, and emotional perception research.",
  keywords:
    "EmotionDeck, Young Adults, human emotions, emotion recognition, visual dataset, emotional intelligence, psychology research, empathy study, black and white portraits, realistic faces, emotion learning, professional training",
  openGraph: {
    title: "EmotionDeck PRO — Phase 3: Young Adults",
    description:
      "Discover 96 detailed portraits of young adults expressing nuanced human emotions. EmotionDeck PRO Phase 3 expands emotional perception research with realistic imagery for education and professional use.",
    url: "https://emotiondeck.com/pro/phase-3",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview-phase3.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck PRO Phase 3 Young Adults preview",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck PRO — Phase 3: Young Adults",
    description:
      "Explore the next step in emotional perception — EmotionDeck PRO Phase 3: Young Adults. 96 high-resolution portraits capturing authentic human emotions for research and education.",
    images: ["https://emotiondeck.com/preview-phase3.jpg"],
  },
};

export default function Phase3Layout({ children }) {
  return (
    <div className="relative z-0 overflow-visible min-h-screen bg-neutral-900 text-white font-sans">
      {children}
    </div>
  );
}

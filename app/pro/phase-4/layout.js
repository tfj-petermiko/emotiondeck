export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  alternates: {
    canonical: "https://emotiondeck.com/pro/phase-4",
  },
  title:
    "EmotionDeck PRO — Phase 4: Children Collection | Emotional Development and Educational Study",
  description:
    "Explore EmotionDeck PRO Phase 4: Children Collection — 84 ultra-realistic black-and-white portraits capturing authentic emotional expressions of children aged around 6–7 years. Designed for educational and psychological illustration, supporting emotion recognition, empathy, and early emotional development research.",
  keywords:
    "EmotionDeck, Children Collection, child emotions, emotional development, child psychology, empathy learning, visual dataset, emotion recognition, educational resource, black-and-white portraits, psychology research, emotional intelligence, empathy education",
  openGraph: {
    title: "EmotionDeck PRO — Phase 4: Children Collection",
    description:
      "Discover 84 detailed black-and-white portraits of children aged 6–7 expressing authentic emotions. EmotionDeck PRO Phase 4 extends emotional perception research into early childhood education and empathy training.",
    url: "https://emotiondeck.com/pro/phase-4",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview-phase4.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck PRO Phase 4 Children Collection preview",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck PRO — Phase 4: Children Collection",
    description:
      "EmotionDeck PRO Phase 4 presents 84 high-resolution portraits of children expressing core human emotions for education, psychology, and empathy development.",
    images: ["https://emotiondeck.com/preview-phase4.jpg"],
  },
};

export default function Phase4Layout({ children }) {
  return (
    <div className="relative z-0 overflow-visible min-h-screen bg-neutral-900 text-white font-sans">
      {children}
    </div>
  );
}

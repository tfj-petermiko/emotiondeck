export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  alternates: {
    canonical: "https://emotiondeck.com/pro",
  },
  title: "EmotionDeck PRO Collection — Advanced Human Emotion Study",
  description:
    "Unlock the EmotionDeck PRO Collection to explore advanced and complex human emotions across regions, ages, and genders. Designed for professionals, educators, and emotional research.",
  keywords:
    "EmotionDeck PRO, emotion recognition, complex emotions, human expressions, empathy research, emotional intelligence, education, psychology dataset, human behaviour, visual learning",
  openGraph: {
    title: "EmotionDeck PRO Collection — Advanced Human Emotion Study",
    description:
      "Explore the EmotionDeck PRO Collection — a deep visual dataset of complex emotional expressions across diverse demographics, crafted for research, education, and professional development.",
    url: "https://emotiondeck.com/pro",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview-pro.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck PRO Collection preview",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck PRO Collection — Advanced Human Emotion Study",
    description:
      "Unlock the EmotionDeck PRO Collection — explore complex emotional expressions across regions, ages, and genders for education and research.",
    images: ["https://emotiondeck.com/preview-pro.jpg"],
  },
};

export default function ProLayout({ children }) {
  return (
    <div className="relative z-0 overflow-visible min-h-screen bg-neutral-900 text-white">
      {children}
    </div>
  );
}

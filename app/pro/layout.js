export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck PRO Collection — Explore Advanced Human Emotion",
  description:
    "Unlock the EmotionDeck PRO Collection to explore advanced and complex human emotions across regions, ages, and genders. Designed for professionals, educators, and emotional research.",
  openGraph: {
    title: "EmotionDeck PRO Collection — Explore Advanced Human Emotion",
    description:
      "Explore the EmotionDeck PRO Collection — a visual dataset of complex emotional expressions across diverse demographics, crafted for research, education, and professional development.",
    url: "https://emotiondeck.com/pro",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck PRO Collection — Explore Advanced Human Emotion",
    description:
      "Gain deeper insight into complex human emotions with EmotionDeck PRO — designed for educators, professionals, and researchers.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ProLayout({ children }) {
  return <>{children}</>;
}

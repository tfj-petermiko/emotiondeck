export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck AI Generator — Create Custom Emotional Portraits with Precision",
  description:
    "EmotionDeck AI Generator allows you to create realistic emotional portraits instantly. Combine human emotion, cultural context, age, and gender to design unique expressive faces that align with your research, education, or creative vision.",
  openGraph: {
    title: "EmotionDeck AI Generator — Create Custom Emotional Portraits",
    description:
      "Design and generate emotional portraits using AI — explore expressions across emotions, ages, and cultures. Ideal for educators, psychologists, and creative professionals.",
    url: "https://emotiondeck.com/ai-generator",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck AI Generator — Create Custom Emotional Portraits",
    description:
      "Use the EmotionDeck AI Generator to instantly create realistic emotional portraits for study, teaching, or creative exploration.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function GeneratorLayout({ children }) {
  return <>{children}</>;
}

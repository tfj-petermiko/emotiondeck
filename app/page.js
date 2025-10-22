// app/page.js  ✅ (Server Component)
import HomeClient from "./HomeClient";

export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck — Train Your Perception. Understand Human Emotion.",
  description:
    "EmotionDeck helps you learn to recognise, interpret, and understand human emotions through subtle facial expressions, mindful observation, and guided visual learning.",
  keywords:
    "EmotionDeck, emotion recognition, emotional learning, facial expressions, empathy, psychology, emotion education, emotional intelligence, human behaviour, emotional research, emotion study, global emotions, microexpressions, nonverbal communication, emotion perception, visual learning, mindfulness, emotion awareness, emotion analysis",
  openGraph: {
    title: "EmotionDeck — Explore Human Emotion",
    description:
      "EmotionDeck helps you learn to recognise, interpret, and understand human emotion through visual learning.",
    url: "https://emotiondeck.com/",
    type: "website",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck preview — human emotion learning platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck — Explore Human Emotion",
    description:
      "Discover how to see, feel, and understand emotions through visual learning with EmotionDeck.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function Page() {
  return <HomeClient />;
}

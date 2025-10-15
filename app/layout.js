import "./globals.css";

export const metadata = {
  title: "EmotionDeck — Train Your Perception. Understand Human Emotion.",
  description:
    "EmotionDeck helps you learn to recognise, interpret, and understand human emotion through subtle facial expressions, mindful observation, and guided visual learning.",
  keywords:
    "EmotionDeck, emotion recognition, facial expressions, empathy, emotion perception, learn emotions, human emotion training, psychology, mindfulness, emotional intelligence",
  openGraph: {
    title: "EmotionDeck — Train Your Perception. Understand Human Emotion.",
    description:
      "Learn to recognise and understand emotions with EmotionDeck — an interactive way to explore human expression and emotional intelligence.",
    url: "https://emotiondeck.com",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg", // replace with your actual preview image
        width: 1200,
        height: 630,
        alt: "EmotionDeck — Emotional Recognition Training",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck — Train Your Perception. Understand Human Emotion.",
    description:
      "Develop emotional intelligence through facial expression recognition and mindful observation with EmotionDeck.",
    images: ["https://emotiondeck.com/preview.jpg"], // replace with your actual image
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-white min-h-screen overflow-visible antialiased">
        {children}
      </body>
    </html>
  );
}

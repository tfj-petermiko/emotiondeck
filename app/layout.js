import "./globals.css";
import ClientLayout from "./ClientLayout"; // nowy komponent klientowy

export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  alternates: { canonical: "https://emotiondeck.com" },
  title: "EmotionDeck — Train Your Perception. Understand Human Emotion.",
  description:
    "EmotionDeck helps you learn to recognise, interpret, and understand human emotion through subtle facial expressions, mindful observation, and guided visual learning.",
  keywords:
    "EmotionDeck, emotion recognition, facial expressions, empathy, emotion perception, learn emotions, human emotion training, psychology, mindfulness, emotional intelligence",
  verification: {
    google: "IDzJ4Cn66z4WCWBw3l2BI6IRKH-POLMXrDzfDsRjGwc",
  },
  openGraph: {
    title: "EmotionDeck — Train Your Perception. Understand Human Emotion.",
    description:
      "Explore the full EmotionDeck visual learning platform — perceive and understand human emotions through detailed facial expressions and mindful observation.",
    url: "https://emotiondeck.com",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview-main.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck main preview image",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck — Train Your Perception. Understand Human Emotion.",
    description:
      "Train your perception and understand subtle human expressions with the EmotionDeck visual learning platform.",
    images: ["https://emotiondeck.com/preview-main.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-white min-h-screen overflow-visible antialiased flex flex-col select-none">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck - See. Feel. Understand.",
  description:
    "EmotionDeck helps you learn to recognise, interpret, and understand human emotion through subtle facial expressions and mindful visual learning.",
  keywords:
    "EmotionDeck, emotion recognition, emotional learning, facial expressions, emotional intelligence, psychology education, empathy training, nonverbal communication, emotion perception, mindfulness, human behaviour, visual learning",
  alternates: {
    canonical: "https://emotiondeck.com/",
  },
  openGraph: {
    title: "EmotionDeck - See. Feel. Understand.",
    description:
      "Explore the global platform that teaches emotional perception through art, science, and visual learning. See. Feel. Understand.",
    url: "https://emotiondeck.com/",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - See. Feel. Understand.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - See. Feel. Understand.",
    description:
      "Learn to recognise, interpret, and understand human emotion through visual learning with EmotionDeck.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <style>{`
          html, body {
            background-color: #0b0b0b;
            color: #ffffff;
          }
        `}</style>
      </head>

      <body
        className="
          bg-neutral-900
          text-white
          min-h-screen
          flex flex-col
          select-none
          antialiased
          overflow-x-hidden
          overflow-y-auto
        "
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

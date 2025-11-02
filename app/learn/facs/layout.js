export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Learn & Grow - Facial Action Coding System (FACS)",
  description:
    "Explore the science of facial expression with EmotionDeck’s FACS guide inspired by Paul Ekman. Learn how 44 Action Units reveal the hidden architecture of emotion and human expression.",
  keywords:
    "EmotionDeck FACS, Paul Ekman, facial action coding system, emotion learning, microexpressions, psychology education, facial analysis, emotion recognition, human expression, emotional intelligence",
  alternates: {
    canonical: "https://emotiondeck.com/learn/facs",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "android-chrome", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome", url: "/android-chrome-512x512.png" },
    ],
  },
  openGraph: {
    title: "EmotionDeck Learn & Grow - Facial Action Coding System (FACS)",
    description:
      "Discover how subtle muscle movements form the universal language of emotion. EmotionDeck’s FACS guide explores Paul Ekman’s research and the anatomy of 44 Action Units.",
    url: "https://emotiondeck.com/learn/facs",
    siteName: "EmotionDeck",
    type: "website",
    images: [
      {
        url: "https://emotiondeck.com/preview/facs.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck FACS Learning Page Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Learn & Grow - Facial Action Coding System (FACS)",
    description:
      "Learn the microexpressions that shape emotion with EmotionDeck’s FACS guide inspired by Paul Ekman. Explore the 44 Action Units that define the human face of feeling.",
    images: ["https://emotiondeck.com/preview/facs.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LearnFacsLayout({ children }) {
  return <>{children}</>;
}

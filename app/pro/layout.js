export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck PRO Collection - Explore Advanced Human Emotion",
  description:
    "Discover the EmotionDeck PRO Collection - an advanced emotional dataset showcasing complex human expressions across regions, ages, and genders, built for research, education, and professional study.",
  keywords:
    "EmotionDeck PRO Collection, advanced emotions, emotional dataset, human expression, psychology research, emotional intelligence, professional education, cultural emotion study, emotion recognition, visual learning",
  alternates: {
    canonical: "https://emotiondeck.com/pro",
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
    title: "EmotionDeck PRO Collection - Explore Advanced Human Emotion",
    description:
      "Explore the EmotionDeck PRO Collection - a professional-grade dataset capturing advanced emotional expressions across diverse cultures and demographics for research and learning.",
    url: "https://emotiondeck.com/pro",
    siteName: "EmotionDeck",
    type: "website",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck PRO Collection Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck PRO Collection - Explore Advanced Human Emotion",
    description:
      "Unlock EmotionDeck PRO - an advanced visual library of human emotion designed for educators, professionals, and researchers seeking deeper understanding.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ProLayout({ children }) {
  return <>{children}</>;
}

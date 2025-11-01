export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Articles - Psychology Culture and Emotional Awareness",
  description:
    "Explore reflections on psychology emotion and culture through EmotionDeck Articles. Learn how emotion connects with creativity identity and human understanding.",
  keywords:
    "EmotionDeck Articles, psychology culture emotion, emotional awareness, Jungian archetypes, emotional intelligence, consciousness, creativity, self reflection, analytical psychology, human emotion",
  alternates: {
    canonical: "https://emotiondeck.com/learn/articles",
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
    title: "EmotionDeck Articles - Psychology Culture and Emotional Awareness",
    description:
      "Read EmotionDeck Articles exploring psychology emotion and culture. Discover how emotion connects thought creativity and identity through reflection and analysis.",
    url: "https://emotiondeck.com/learn/articles",
    siteName: "EmotionDeck",
    type: "website",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck Articles - Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Articles - Psychology Culture and Emotional Awareness",
    description:
      "Explore EmotionDeck Articles about psychology emotion and culture – gain insight into how emotion connects with thought creativity and identity.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function ArticlesLayout({ children }) {
  return <>{children}</>;
}

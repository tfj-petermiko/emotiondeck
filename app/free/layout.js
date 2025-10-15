export const metadata = {
  title: "EmotionDeck Free Collection — Explore 144 Emotional Expressions",
  description:
    "Access the EmotionDeck Free Collection to explore 144 facial expressions of emotion across different regions and genders. Learn emotional recognition through visual training.",
  openGraph: {
    title: "EmotionDeck Free Collection — Explore 144 Emotional Expressions",
    description:
      "Browse the EmotionDeck Free Collection — 144 realistic emotional expressions across regions and genders to help you develop emotional perception and empathy.",
    url: "https://emotiondeck.com/free",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview-free.jpg", // replace with your actual preview
        width: 1200,
        height: 630,
        alt: "EmotionDeck Free Collection preview",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Free Collection — Explore 144 Emotional Expressions",
    description:
      "Access the EmotionDeck Free Collection and train your perception through diverse emotional expressions.",
    images: ["https://emotiondeck.com/preview-free.jpg"], // replace if needed
  },
};

export default function FreeLayout({ children }) {
  return (
    <div className="relative z-0 overflow-visible min-h-screen bg-neutral-900 text-white">
      {children}
    </div>
  );
}

export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Cookies Policy — How We Use Cookies",
  description:
    "Learn how EmotionDeck uses cookies and similar technologies to enhance your experience, improve performance, and ensure smooth functionality across our website.",
  openGraph: {
    title: "EmotionDeck Cookies Policy — How We Use Cookies",
    description:
      "Understand how EmotionDeck uses cookies and analytics tools to enhance functionality and performance.",
    url: "https://emotiondeck.com/legal/cookies",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Cookies Policy — How We Use Cookies",
    description:
      "Explore how EmotionDeck manages cookies and ensures a secure, optimised browsing experience.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function CookiesLayout({ children }) {
  return <>{children}</>;
}

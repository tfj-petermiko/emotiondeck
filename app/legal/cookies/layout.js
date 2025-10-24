export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Cookies Policy — Understanding Our Use of Cookies",
  description:
    "Learn how EmotionDeck uses cookies and similar technologies to improve performance, enhance your experience, and ensure transparency, privacy, and smooth functionality across our platform.",
  keywords:
    "EmotionDeck cookies policy, how we use cookies, privacy and data, website analytics, cookie settings, GDPR compliance, secure browsing, online performance, data transparency",
  alternates: {
    canonical: "https://emotiondeck.com/legal/cookies",
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
    title: "EmotionDeck Cookies Policy — Understanding Our Use of Cookies",
    description:
      "Discover how EmotionDeck manages cookies responsibly to enhance functionality, analyse usage, and ensure a secure, transparent experience for all users.",
    url: "https://emotiondeck.com/legal/cookies",
    siteName: "EmotionDeck",
    type: "website",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck Cookies Policy Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Cookies Policy — Understanding Our Use of Cookies",
    description:
      "Explore how EmotionDeck uses cookies and analytics tools to optimise performance and ensure privacy across all devices and platforms.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function CookiesLayout({ children }) {
  return <>{children}</>;
}

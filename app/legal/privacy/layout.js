export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Privacy Policy - How We Protect Your Personal Data",
  description:
    "Learn how EmotionDeck collects, uses, and protects your personal data in compliance with GDPR and UK Data Protection Law, ensuring transparency and security at every step.",
  keywords:
    "EmotionDeck privacy policy, data protection, GDPR compliance, UK privacy law, personal data, secure browsing, data transparency, information security, online privacy",
  alternates: {
    canonical: "https://emotiondeck.com/legal/privacy",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  openGraph: {
    title: "EmotionDeck Privacy Policy - How We Protect Your Personal Data",
    description:
      "Discover how EmotionDeck safeguards your personal information with full GDPR compliance, ensuring privacy, transparency, and trust.",
    url: "https://emotiondeck.com/legal/privacy",
    siteName: "EmotionDeck",
    type: "website",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck Privacy Policy Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Privacy Policy - How We Protect Your Personal Data",
    description:
      "Explore EmotionDeck’s approach to privacy and data protection under GDPR and UK law - transparent, secure, and user-focused.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function PrivacyLayout({ children }) {
  return <>{children}</>;
}

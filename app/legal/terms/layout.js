export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Terms of Use - Your Rights and Responsibilities",
  description:
    "Review EmotionDeck’s Terms of Use to understand your rights, obligations, and permitted use of our content and platform, ensuring clarity, fairness, and transparency for all users.",
  keywords:
    "EmotionDeck terms of use, user rights, platform rules, intellectual property, permitted use, user responsibilities, legal agreement, content access, online policy",
  alternates: {
    canonical: "https://emotiondeck.com/legal/terms",
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
    title: "EmotionDeck Terms of Use - Your Rights and Responsibilities",
    description:
      "Learn about EmotionDeck’s Terms of Use - covering intellectual property, permitted use, user conduct, and content ownership, ensuring fairness and transparency.",
    url: "https://emotiondeck.com/legal/terms",
    siteName: "EmotionDeck",
    type: "website",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck Terms of Use Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Terms of Use - Your Rights and Responsibilities",
    description:
      "Understand the Terms governing your access to and use of EmotionDeck - promoting responsible engagement and respect for content ownership.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function TermsLayout({ children }) {
  return <>{children}</>;
}

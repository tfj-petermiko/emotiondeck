export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Payments & Security — Safe and Transparent Transactions",
  description:
    "Learn how EmotionDeck processes payments securely through PayPal. All transactions are encrypted, GDPR compliant, and handled with full transparency and no storage of financial data.",
  keywords:
    "EmotionDeck payments, secure transactions, PayPal, GDPR compliance, data protection, financial security, encrypted payments, UK data law, EmotionDeck PRO, transparency",
  alternates: {
    canonical: "https://emotiondeck.com/legal/payments",
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
    title: "EmotionDeck Payments & Security — Safe and Transparent Transactions",
    description:
      "EmotionDeck processes all payments securely via PayPal with encrypted transactions, GDPR compliance, and full transparency — ensuring trust and protection at every step.",
    url: "https://emotiondeck.com/legal/payments",
    siteName: "EmotionDeck",
    type: "website",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck Payments & Security Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Payments & Security — Safe and Transparent Transactions",
    description:
      "Discover how EmotionDeck ensures safe, encrypted PayPal transactions and full GDPR compliance — transparency and trust in every payment.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function PaymentsLayout({ children }) {
  return <>{children}</>;
}

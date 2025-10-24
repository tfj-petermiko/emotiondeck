export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Legal Information - Policies and Terms",
  description:
    "Access all official legal information for EmotionDeck, including Privacy Policy, Terms of Use, and Cookies Policy - written transparently and compliant with UK and EU data protection law.",
  keywords:
    "EmotionDeck legal information, privacy policy, terms of use, cookies policy, UK law, EU compliance, GDPR, transparency, user rights, data protection",
  alternates: {
    canonical: "https://emotiondeck.com/legal",
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
    title: "EmotionDeck Legal Information - Policies and Terms",
    description:
      "Explore all EmotionDeck legal documents - Privacy Policy, Terms of Use, and Cookies Policy - created with clarity and full legal compliance.",
    url: "https://emotiondeck.com/legal",
    siteName: "EmotionDeck",
    type: "website",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck Legal Information Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Legal Information - Policies and Terms",
    description:
      "Review EmotionDeck’s complete legal section, including Privacy, Terms, and Cookies Policies - transparent and GDPR compliant.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function LegalLayout({ children }) {
  return <>{children}</>;
}

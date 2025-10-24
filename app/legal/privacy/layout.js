export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Privacy Policy — How We Protect Your Data",
  description:
    "Read EmotionDeck’s Privacy Policy to understand how we collect, use, and protect your personal data in full compliance with GDPR and UK Data Protection Law.",
  openGraph: {
    title: "EmotionDeck Privacy Policy — How We Protect Your Data",
    description:
      "EmotionDeck is committed to GDPR-compliant privacy standards, ensuring your data is handled securely and transparently.",
    url: "https://emotiondeck.com/legal/privacy",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Privacy Policy — How We Protect Your Data",
    description:
      "Discover how EmotionDeck protects your personal data in accordance with GDPR and UK privacy law.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function PrivacyLayout({ children }) {
  return <>{children}</>;
}

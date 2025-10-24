export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Legal Information — Policies & Terms",
  description:
    "Access all legal information related to EmotionDeck, including Privacy Policy, Terms of Use, and Cookies Policy — written transparently and compliant with UK and EU law.",
  openGraph: {
    title: "EmotionDeck Legal Information — Policies & Terms",
    description:
      "Explore all EmotionDeck legal documents including Privacy, Terms, and Cookies Policies.",
    url: "https://emotiondeck.com/legal",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Legal Information — Policies & Terms",
    description:
      "Review EmotionDeck’s official legal documents: Privacy Policy, Terms of Use, and Cookies Policy.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function LegalLayout({ children }) {
  return <>{children}</>;
}

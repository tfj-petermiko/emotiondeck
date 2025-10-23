import LegalClient from "./LegalClient";

export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  alternates: { canonical: "https://emotiondeck.com/legal" },

  title: "EmotionDeck Legal Information — Privacy, Terms & Cookies",
  description:
    "Access EmotionDeck’s legal documents including Privacy Policy, Terms of Use, and Cookies Policy — fully compliant with UK GDPR and EU standards.",

  keywords: [
    "EmotionDeck Legal Information",
    "EmotionDeck Privacy Policy",
    "EmotionDeck Terms of Use",
    "EmotionDeck Cookies Policy",
    "UK GDPR compliance",
    "EU data protection",
    "Vercel hosting",
    "transparent privacy",
    "ethical data practices",
    "legal compliance",
  ],

  openGraph: {
    title: "EmotionDeck Legal Information — Privacy, Terms & Cookies",
    description:
      "Read EmotionDeck’s Privacy Policy, Terms of Use, and Cookies Policy — transparent, user-friendly, and compliant with UK and EU law.",
    url: "https://emotiondeck.com/legal",
    type: "website",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck Legal Documents — Privacy, Terms & Cookies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Legal Information — Privacy, Terms & Cookies",
    description:
      "Explore EmotionDeck’s Privacy Policy, Terms of Use, and Cookies Policy — written transparently and compliant with UK GDPR.",
    images: ["https://emotiondeck.com/preview.jpg"],
    creator: "@emotiondeck",
  },
};

export default function Page() {
  return <LegalClient />;
}

export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Terms of Use — Your Rights & Responsibilities",
  description:
    "Read the Terms of Use for EmotionDeck to understand your rights, responsibilities, and the rules for accessing and using our platform and content.",
  openGraph: {
    title: "EmotionDeck Terms of Use — Your Rights & Responsibilities",
    description:
      "Learn about EmotionDeck’s Terms of Use, including intellectual property, permitted use, and user obligations.",
    url: "https://emotiondeck.com/legal/terms",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Terms of Use — Your Rights & Responsibilities",
    description:
      "Understand the Terms governing your use of the EmotionDeck platform and its content.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function TermsLayout({ children }) {
  return <>{children}</>;
}

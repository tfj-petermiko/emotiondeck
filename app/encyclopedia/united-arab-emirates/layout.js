
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - United Arab Emirates",
  description: "The Unknown Soul - an emotional archetype of the UAE. It embodies hidden depths and silent strength, unveiling a tapestry of mystery, connection, and uncharted emotion.",
  keywords: "EmotionDeck United Arab Emirates, The Spirit of Water emotion, UAE cultural empathy, water spirit psychology, EmotionDeck identity UAE, emotional culture United Arab Emirates, Spirit of Water psychology, UAE emotion and identity, empathy in Emirati culture, EmotionDeck water archetype, United Arab Emirates emotional journey, Spirit of Water emotional identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/united-arab-emirates",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - United Arab Emirates",
    description: "The Unknown Soul - an emotional archetype of the UAE. It embodies hidden depths and silent strength, unveiling a tapestry of mystery, connection, and uncharted emotion.",
    url: "https://emotiondeck.com/encyclopedia/united-arab-emirates",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "United Arab Emirates - The Spirit of Water | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — United Arab Emirates (The Spirit of Water)",
    description: "The Unknown Soul - an emotional archetype of the UAE. It embodies hidden depths and silent strength, unveiling a tapestry of mystery, connection, and uncharted emotion.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function UnitedArabEmiratesLayout({ children }) {
  return <>{children}</>;
}

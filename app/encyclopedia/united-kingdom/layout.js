
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - United Kingdom",
  description: "The Unknown Soul - a poignant enigma of the UK. It embodies hidden depths and uncharted emotions, inviting reflection on identity, connection, and the unspoken journey within.",
  keywords: "EmotionDeck United Kingdom, The Stoic Visionary emotion, British culture empathy, United Kingdom psychology, Stoic Visionary identity, EmotionDeck empathy UK, UK cultural emotion, Stoic Visionary psychology UK, British identity emotion, EmotionDeck culture UK, United Kingdom empathy psychology, Stoic Visionary cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/united-kingdom",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - United Kingdom",
    description: "The Unknown Soul - a poignant enigma of the UK. It embodies hidden depths and uncharted emotions, inviting reflection on identity, connection, and the unspoken journey within.",
    url: "https://emotiondeck.com/encyclopedia/united-kingdom",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "United Kingdom - The Stoic Visionary | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — United Kingdom (The Stoic Visionary)",
    description: "The Unknown Soul - a poignant enigma of the UK. It embodies hidden depths and uncharted emotions, inviting reflection on identity, connection, and the unspoken journey within.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function UnitedKingdomLayout({ children }) {
  return <>{children}</>;
}


export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - United Kingdom",
  description: "United Kingdom’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck United Kingdom, The Stoic Visionary emotion, British culture empathy, United Kingdom psychology, Stoic Visionary identity, EmotionDeck empathy UK, UK cultural emotion, Stoic Visionary psychology UK, British identity emotion, EmotionDeck culture UK, United Kingdom empathy psychology, Stoic Visionary cultural identity",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/united-kingdom",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - United Kingdom",
    description: "United Kingdom’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
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
    description: "United Kingdom’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function UnitedKingdomLayout({ children }) {
  return <>{children}</>;
}

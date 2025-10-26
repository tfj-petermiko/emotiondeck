
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Russia",
  description: "Russia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Russia emotion, The Tragic Visionary Russia culture, Russian empathy psychology, EmotionDeck identity Russia, Tragic Visionary emotion exploration, Russian cultural psychology, EmotionDeck empathy insights, The Tragic Visionary identity, EmotionDeck Russia psychology, culture and emotion Russia, empathy in Russian identity, Tragic Visionary emotional depth",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/russia",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Russia",
    description: "Russia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/russia",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Russia - The Tragic Visionary | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Russia (The Tragic Visionary)",
    description: "Russia’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function RussiaLayout({ children }) {
  return <>{children}</>;
}

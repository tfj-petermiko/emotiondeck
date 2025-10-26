
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Senegal",
  description: "Senegal’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s soulful rhythm and collective memory.",
  keywords: "EmotionDeck Senegal tales, The Timeless Griot stories, Senegalese emotion and culture, empathy through Senegal history, psychology of Senegal identity, EmotionDeck cultural empathy, Senegal emotion and identity, Timeless Griot emotion journey, EmotionDeck Africa psychology, Senegal culture and feelings, identity in Senegalese stories, Timeless Griot emotional wisdom",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/senegal",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Senegal",
    description: "Senegal’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s soulful rhythm and collective memory.",
    url: "https://emotiondeck.com/encyclopedia/senegal",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Senegal - The Timeless Griot | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Senegal (The Timeless Griot)",
    description: "Senegal’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection."s soulful rhythm and collective memory.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SenegalLayout({ children }) {
  return <>{children}</>;
}

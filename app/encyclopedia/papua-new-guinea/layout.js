
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Papua New Guinea",
  description: "Papua New Guinea’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
  keywords: "EmotionDeck Papua New Guinea, The Guardian of Roots, Papua New Guinea culture, emotional identity Papua New Guinea, empathy psychology roots, EmotionDeck cultural emotion, psychology of Papua New Guinea, Guardian of Roots empathy, Papua New Guinea emotional heritage, identity and emotion, EmotionDeck cultural guardians, Papua New Guinea emotion psychology",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/papua-new-guinea",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Papua New Guinea",
    description: "Papua New Guinea’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    url: "https://emotiondeck.com/encyclopedia/papua-new-guinea",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Papua New Guinea - The Guardian of Roots | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Papua New Guinea (The Guardian of Roots)",
    description: "Papua New Guinea’s archetype — The Unknown Soul, symbolising the nation’s emotional identity and cultural soul. A reflection of resilience, memory, and human connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function PapuaNewGuineaLayout({ children }) {
  return <>{children}</>;
}

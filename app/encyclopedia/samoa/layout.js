
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Samoa",
  description: "Samoa's emotional archetype - The Unknown Soul. It embodies profound mystery and uncharted depths, inviting introspection, connection, and the beauty of the unseen.",
  keywords: "EmotionDeck Samoa emotion waves, The Keeper of Tides empathy, Samoan culture psychology, emotional identity Samoa, tides of feeling EmotionDeck, empathy in Samoan heritage, psychology of emotion Samoa, Keeper of Tides wisdom, Samoan emotional journey, cultural tides identity, EmotionDeck emotional culture, Samoa empathy psychology",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/samoa",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Samoa",
    description: "Samoa's emotional archetype - The Unknown Soul. It embodies profound mystery and uncharted depths, inviting introspection, connection, and the beauty of the unseen.",
    url: "https://emotiondeck.com/encyclopedia/samoa",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Samoa - The Keeper of Tides | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Samoa (The Keeper of Tides)",
    description: "Samoa's emotional archetype - The Unknown Soul. It embodies profound mystery and uncharted depths, inviting introspection, connection, and the beauty of the unseen.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function SamoaLayout({ children }) {
  return <>{children}</>;
}

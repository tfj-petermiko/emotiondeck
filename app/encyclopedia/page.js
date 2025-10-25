import EncyclopediaClient from "./Encyclopedia";

export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  alternates: { canonical: "https://emotiondeck.com/encyclopedia" },

  // 🧠 SEO title & description
  title: "EmotionDeck - First Global Emotion Encyclopedia 🌍",
  description:
    "Explore the EmotionDeck Global Emotion Encyclopedia – a complete atlas of human archetypes, emotions, and cultural expressions across 195 nations.",

  keywords:
    "EmotionDeck Encyclopedia, Global Emotion Atlas, Jungian archetypes, emotional culture, cultural emotions, empathy, psychology, world archetypes, emotional diversity, human expression map",

  openGraph: {
    title: "EmotionDeck - First Global Emotion Encyclopedia 🌍",
    description:
      "Discover the emotional identity of every nation through archetypes and culture. Explore the world's first emotional atlas – by EmotionDeck.",
    url: "https://emotiondeck.com/encyclopedia",
    type: "website",
    siteName: "EmotionDeck",
    images: [
      {
        url: "/private_images/meta/encyclopedia_preview.webp",
        width: 1200,
        height: 630,
        alt: "EmotionDeck - First Global Emotion Encyclopedia 🌍",
      },
    ],
    locale: "en_GB",
  },

  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck - First Global Emotion Encyclopedia 🌍",
    description:
      "Explore 195 nations through emotion and culture – the First Global Emotion Encyclopedia by EmotionDeck.",
    images: ["/private_images/meta/encyclopedia_preview.webp"],
  },
};

export default function Page() {
  return <EncyclopediaClient />;
}

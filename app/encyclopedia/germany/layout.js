
export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Encyclopedia - Germany",
  description: "Germany's emotional archetype - The Unknown Soul. It embodies hidden depths and whispered truths, revealing a landscape of introspection, mystery, and quiet strength.",
  keywords: "EmotionDeck Germany, The Architect of Order, German discipline, emotional culture Germany, national identity Germany, Jungian archetypes Germany, German symbolism, cultural psyche Germany, structured emotion, empathetic order, emotional resilience Germany, symbolic architecture, German emotional depth, psychological archetypes, order from chaos, disciplined grace, unyielding resolve, emotional symbolism",
  alternates: {
    canonical: "https://emotiondeck.com/encyclopedia/germany",
  },
  openGraph: {
    title: "EmotionDeck Encyclopedia - Germany",
    description: "Germany's emotional archetype - The Unknown Soul. It embodies hidden depths and whispered truths, revealing a landscape of introspection, mystery, and quiet strength.",
    url: "https://emotiondeck.com/encyclopedia/germany",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Germany - The Architect of Order | EmotionDeck Encyclopedia",
      },
    ],
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Encyclopedia — Germany (The Architect of Order)",
    description: "Germany's emotional archetype - The Unknown Soul. It embodies hidden depths and whispered truths, revealing a landscape of introspection, mystery, and quiet strength.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function GermanyLayout({ children }) {
  return <>{children}</>;
}

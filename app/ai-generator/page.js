import GeneratorPage from "./GeneratorClient";

export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  alternates: { canonical: "https://emotiondeck.com/ai-generator" },

  title: "EmotionDeck AI Generator — Create Emotional Portraits Instantly",
  description:
    "Generate realistic black-and-white emotional portraits with AI. Combine emotion, culture, age and gender for research, education or creative work.",

  keywords: [
    "EmotionDeck AI Generator",
    "AI emotion generator",
    "AI portrait creator",
    "emotional portrait",
    "emotion recognition",
    "human expression dataset",
    "psychology AI tools",
    "emotional intelligence",
    "AI face generator",
    "creative research tools",
  ],

  openGraph: {
    title: "EmotionDeck AI Generator — Realistic Emotional Portraits",
    description:
      "Design expressive portraits using AI — explore human emotion across cultures, ages and genders.",
    url: "https://emotiondeck.com/ai-generator",
    type: "website",
    siteName: "EmotionDeck",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck AI Generator Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck AI Generator — Create Emotional Portraits",
    description:
      "Use AI to craft realistic emotional portraits for research, teaching and art.",
    images: ["https://emotiondeck.com/preview.jpg"],
    creator: "@emotiondeck",
  },
};


export default function Page() {
  return <GeneratorPage />;
}

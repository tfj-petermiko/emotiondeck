export const metadata = {
  metadataBase: new URL("https://emotiondeck.com"),
  title: "EmotionDeck Focus Rooms - Shared Presence and Deep Focus",
  description:
    "Enter EmotionDeck Focus Rooms - quiet digital spaces designed for mindful work, shared concentration, and calm accountability. Work side by side in stillness and presence.",
  keywords:
    "EmotionDeck Focus Rooms, focus, shared presence, deep work, calm productivity, body doubling, virtual coworking, mindfulness, concentration, emotional balance",
  alternates: {
    canonical: "https://emotiondeck.com/focus-rooms",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "android-chrome", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome", url: "/android-chrome-512x512.png" },
    ],
  },
  openGraph: {
    title: "EmotionDeck Focus Rooms - Shared Presence and Deep Focus",
    description:
      "Focus Rooms by EmotionDeck create calm online spaces for deep concentration and mindful work. Designed for those who thrive in quiet company.",
    url: "https://emotiondeck.com/focus-rooms",
    siteName: "EmotionDeck",
    type: "website",
    images: [
      {
        url: "https://emotiondeck.com/preview.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck Focus Rooms Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmotionDeck Focus Rooms - Shared Presence and Deep Focus",
    description:
      "Work together in silence and intention. EmotionDeck Focus Rooms offer calm spaces for shared focus, balance, and quiet connection.",
    images: ["https://emotiondeck.com/preview.jpg"],
  },
};

export default function FocusRoomsLayout({ children }) {
  return <>{children}</>;
}

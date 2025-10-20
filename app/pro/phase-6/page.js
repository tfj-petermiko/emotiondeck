// app/pro/phase-6/layout.js
import fs from "fs";
import path from "path";

const metadataFile = path.join(process.cwd(), "app/pro/phase-6/metadata.txt");

// 🔹 Function to parse metadata.txt
function parseMetadata(filePath) {
  if (!fs.existsSync(filePath)) return {};

  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n").filter((l) => l.trim() && !l.startsWith("# "));
  const meta = {};
  let currentKey = "";

  for (const line of lines) {
    if (line.startsWith("#")) {
      currentKey = line.replace("#", "").trim();
      meta[currentKey] = "";
    } else if (currentKey) {
      meta[currentKey] += (meta[currentKey] ? "\n" : "") + line.trim();
    }
  }

  return meta;
}

// 🧠 Load metadata from file
const meta = parseMetadata(metadataFile);

// 🧩 Create Next.js metadata object dynamically
export const metadata = {
  metadataBase: new URL(meta.metadataBase || "https://emotiondeck.com"),
  alternates: { canonical: meta.canonical || "https://emotiondeck.com/pro/phase-6" },
  title: meta.title || "EmotionDeck PRO — Phase 6: Evolution | One World, Many Feelings",
  description:
    meta.description ||
    "Explore EmotionDeck PRO Phase 6: Evolution — a global emotional atlas portraying human feelings across cultures, ages, and genders.",
  keywords:
    meta.keywords ||
    "EmotionDeck, Evolution Collection, emotional evolution, cross-cultural emotions, empathy, global emotional intelligence, psychology of emotion, cultural anthropology, emotion perception, human dataset, visual learning",
  openGraph: {
    title: meta.og_title || meta.title,
    description: meta.og_description || meta.description,
    url: meta.og_url || meta.canonical,
    siteName: "EmotionDeck",
    images: [
      {
        url: meta.og_image || "https://emotiondeck.com/preview-phase6.jpg",
        width: 1200,
        height: 630,
        alt: "EmotionDeck PRO Phase 6 Evolution preview",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: meta.twitter_card || "summary_large_image",
    title: meta.twitter_title || meta.title,
    description: meta.twitter_description || meta.description,
    images: [meta.twitter_image || "https://emotiondeck.com/preview-phase6.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#000000",
};

// 🧱 Page Layout
export default function Phase6Layout({ children }) {
  return (
    <div className="relative z-0 overflow-visible min-h-screen bg-neutral-900 text-white font-sans">
      <div className="mx-[10%]">{children}</div>
    </div>
  );
}

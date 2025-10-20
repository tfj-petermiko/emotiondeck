// app/layout.js
import "./globals.css";
import ClientLayout from "./ClientLayout";
import fs from "fs";
import path from "path";

// ============================================================
// 🧠 Universal Metadata Loader
// Reads /public/content/[section]/metadata.txt automatically
// ============================================================
function loadMetadata() {
  try {
    const baseDir = path.join(process.cwd(), "public", "content");
    const cwd = __dirname.replace(/\\/g, "/");

    // 🧭 All supported sections (Home + Pro phases + new ones)
    const sections = [
      { key: "pro/phase-6", dir: "pro/phase-6" },
      { key: "pro/phase-5", dir: "pro/phase-5" },
      { key: "pro/phase-4", dir: "pro/phase-4" },
      { key: "pro/phase-3", dir: "pro/phase-3" },
      { key: "pro/phase-2", dir: "pro/phase-2" },
      { key: "pro", dir: "pro" },
      { key: "free", dir: "free" },
      { key: "learn", dir: "learn" },
      { key: "globalmap", dir: "globalmap" },
      { key: "generator", dir: "generator" },
      { key: "home", dir: "home" },
    ];

    // 🔍 Detect which section is being built
    let selectedDir = "home"; // default for /
    for (const section of sections) {
      if (cwd.includes(section.key)) {
        selectedDir = section.dir;
        break;
      }
    }

    // 📂 Load metadata.txt from /public/content/[section]/
    const filePath = path.join(baseDir, selectedDir, "metadata.txt");
    if (!fs.existsSync(filePath)) return {};

    const text = fs.readFileSync(filePath, "utf-8");
    const meta = {};
    let currentKey = "";

    text.split("\n").forEach((line) => {
      if (line.startsWith("#")) {
        currentKey = line.replace("#", "").trim();
        meta[currentKey] = "";
      } else if (currentKey && line.trim()) {
        meta[currentKey] += (meta[currentKey] ? "\n" : "") + line.trim();
      }
    });

    Object.keys(meta).forEach((k) => (meta[k] = meta[k].trim()));
    return meta;
  } catch (err) {
    console.error("⚠️ Metadata loading failed:", err);
    return {};
  }
}

// ============================================================
// 🧾 Build Next.js Metadata Object
// ============================================================
const meta = loadMetadata();

export const metadata = {
  metadataBase: meta.metadataBase ? new URL(meta.metadataBase) : undefined,
  alternates: meta.canonical ? { canonical: meta.canonical } : undefined,
  title: meta.title || "EmotionDeck — Explore Human Emotion",
  description:
    meta.description ||
    "EmotionDeck helps you learn to recognise, interpret, and understand human emotion through visual learning.",
  keywords: meta.keywords,
  verification: meta.google_verification
    ? { google: meta.google_verification }
    : undefined,
  openGraph: {
    title: meta.og_title || meta.title,
    description: meta.og_description || meta.description,
    url: meta.og_url,
    siteName: "EmotionDeck",
    images: meta.og_image
      ? [
          {
            url: meta.og_image,
            width: 1200,
            height: 630,
            alt: "EmotionDeck preview",
          },
        ]
      : [],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: meta.twitter_card || "summary_large_image",
    title: meta.twitter_title || meta.title,
    description: meta.twitter_description || meta.description,
    images: meta.twitter_image ? [meta.twitter_image] : [],
  },
};

// ============================================================
// 🌍 Universal Root Layout (shared by all pages)
// ============================================================
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-white min-h-screen overflow-visible antialiased flex flex-col select-none">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

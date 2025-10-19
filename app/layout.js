import "./globals.css";
import ClientLayout from "./ClientLayout";
import fs from "fs";
import path from "path";

// 🧠 Load everything from /public/content/home/metadata.txt
function loadFullMetadata() {
  try {
    const filePath = path.join(process.cwd(), "public", "content", "home", "metadata.txt");
    const raw = fs.readFileSync(filePath, "utf-8");
    const parsed = {};
    let currentKey = null;

    raw.split("\n").forEach((line) => {
      if (line.startsWith("# ")) {
        currentKey = line.replace("# ", "").trim();
        parsed[currentKey] = "";
      } else if (currentKey && line.trim() !== "") {
        parsed[currentKey] += (parsed[currentKey] ? "\n" : "") + line.trim();
      }
    });

    return parsed;
  } catch (error) {
    console.error("⚠️ Could not load metadata.txt:", error);
    return {};
  }
}

const meta = loadFullMetadata();

export const metadata = {
  metadataBase: meta.metadataBase ? new URL(meta.metadataBase) : undefined,
  alternates: meta.canonical ? { canonical: meta.canonical } : undefined,
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  verification: meta.google_verification
    ? { google: meta.google_verification }
    : undefined,
  openGraph: {
    title: meta.og_title,
    description: meta.og_description,
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
    card: meta.twitter_card,
    title: meta.twitter_title,
    description: meta.twitter_description,
    images: meta.twitter_image ? [meta.twitter_image] : [],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-white min-h-screen overflow-visible antialiased flex flex-col select-none">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

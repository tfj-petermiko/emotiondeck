import fs from "fs";
import path from "path";

function parseMetadataFile(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const data = {};
  let currentKey = "";
  text.split("\n").forEach((line) => {
    const match = line.match(/^#\s*(\w+)/);
    if (match) {
      currentKey = match[1];
      data[currentKey] = "";
    } else if (currentKey && line.trim()) {
      data[currentKey] += line.trim() + " ";
    }
  });
  Object.keys(data).forEach((k) => (data[k] = data[k].trim()));
  return data;
}

const metaPath = path.join(process.cwd(), "public/content/pro/phase6/metadata.txt");
const meta = parseMetadataFile(metaPath);

export const metadata = {
  metadataBase: new URL(meta.metadataBase),
  alternates: { canonical: meta.canonical },
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  openGraph: {
    title: meta.og_title,
    description: meta.og_description,
    url: meta.og_url,
    siteName: "EmotionDeck",
    images: [
      {
        url: meta.og_image,
        width: 1200,
        height: 630,
        alt: "EmotionDeck PRO Phase 6 preview",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: meta.twitter_card,
    title: meta.twitter_title,
    description: meta.twitter_description,
    images: [meta.twitter_image],
  },
};

export default function Phase6Layout({ children }) {
  return (
    <section className="bg-neutral-900 text-white font-sans antialiased min-h-full overflow-visible">
      {children}
    </section>
  );
}

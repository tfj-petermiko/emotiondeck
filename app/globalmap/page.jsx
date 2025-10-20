"use client";
import { useEffect } from "react";
import GlobalMap from "../components/GlobalMap/GlobalMap";

// 🧩 Helper — load metadata.txt (client-safe via fetch)
async function loadMetadata() {
  try {
    const res = await fetch("/content/globalmap/metadata.txt");
    if (!res.ok) return {};
    const text = await res.text();
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
  } catch {
    return {};
  }
}

export default function GlobalMapPage() {
  useEffect(() => {
    loadMetadata(); // silently loads metadata for SEO
  }, []);

  return (
    <main className="flex-grow flex flex-col text-white overflow-hidden">
      <div className="flex-1 w-full overflow-hidden">
        <GlobalMap />
      </div>
    </main>
  );
}

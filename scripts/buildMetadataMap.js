// scripts/buildMetadataMap.js
import fs from "fs";
import path from "path";

function buildMetadataMap() {
  const baseDir = path.join(process.cwd(), "content", "metadata");
  const result = {};

  // Read all .txt files in /content/metadata
  const files = fs.readdirSync(baseDir).filter((f) => f.endsWith(".txt"));

  for (const file of files) {
    const filePath = path.join(baseDir, file);
    const text = fs.readFileSync(filePath, "utf-8");

    // Convert filename to section path, e.g. legal_privacy.txt → legal/privacy
    const section = file.replace(".txt", "").replace(/_/g, "/");
    const meta = {};
    let key = "";

    for (const line of text.split("\n")) {
      if (line.startsWith("#")) {
        key = line.replace("#", "").trim();
        meta[key] = "";
      } else if (key && line.trim()) {
        meta[key] += (meta[key] ? "\n" : "") + line.trim();
      }
    }

    Object.keys(meta).forEach((k) => (meta[k] = meta[k].trim()));
    result[section] = meta;
  }

  return result;
}

const outPath = path.join(process.cwd(), "app", "metadataMap.json");
fs.writeFileSync(outPath, JSON.stringify(buildMetadataMap(), null, 2));

console.log("✅ metadataMap.json generated successfully from /content/metadata/");

// scripts/buildMetadataMap.js
import fs from "fs";
import path from "path";

function buildMetadataMap() {
  const baseDir = path.join(process.cwd(), "public", "content");

  const sections = [
    "home", "free",
    "pro", "pro/facs-analyzer", "pro/phase-1", "pro/phase-2", "pro/phase-3", "pro/phase-4", "pro/phase-5", "pro/phase-6",
    "learn", "learn/facs", "learn/quizzes", "learn/quizzes/quiz-1", "learn/quizzes/quiz-2",
    "generator", "globalmap",
    "legal", "legal/privacy", "legal/terms", "legal/cookies"
  ];

  const result = {};

  for (const section of sections) {
    const filePath = path.join(baseDir, section, "metadata.txt");
    if (!fs.existsSync(filePath)) continue;

    const text = fs.readFileSync(filePath, "utf-8");
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
console.log("✅ metadataMap.json generated successfully.");

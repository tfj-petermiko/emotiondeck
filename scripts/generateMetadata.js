import fs from "fs";
import path from "path";

const metadataDir = path.resolve("content/metadata");
// 🟢 Now output file goes to /public instead of /app
const outputFile = path.resolve("public/metadataMap.json");

function parseTxt(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");
  const data = {};
  let key = "";

  for (const line of lines) {
    if (line.startsWith("#")) {
      key = line.replace("#", "").trim();
      data[key] = "";
    } else if (key && line.trim() !== "") {
      data[key] += (data[key] ? "\n" : "") + line.trim();
    }
  }

  return data;
}

function main() {
  if (!fs.existsSync(metadataDir)) {
    console.error(`❌ Folder ${metadataDir} does not exist!`);
    process.exit(1);
  }

  const files = fs.readdirSync(metadataDir).filter((f) => f.endsWith(".txt"));
  if (files.length === 0) {
    console.error("❌ No .txt files found in content/metadata/");
    process.exit(1);
  }

  const metadataMap = {};

  for (const file of files) {
    const key = file.replace(".txt", "");
    const fullPath = path.join(metadataDir, file);
    const parsed = parseTxt(fullPath);
    metadataMap[key] = parsed;
    console.log(`✅ Added: ${file}`);
  }

  const publicDir = path.resolve("public");
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);

  fs.writeFileSync(outputFile, JSON.stringify(metadataMap, null, 2), "utf-8");
  console.log(`\n🎉 Saved ${files.length} entries to ${outputFile}`);
}

main();

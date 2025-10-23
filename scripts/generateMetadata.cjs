// scripts/buildMetadataMap.cjs
const fs = require("fs");
const path = require("path");

const metadataDir = path.resolve("content/metadata");
const outputFile = path.resolve("app/metadataMap.json");

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
    console.error(`❌ Directory ${metadataDir} not found.`);
    process.exit(1);
  }

  const files = fs.readdirSync(metadataDir).filter(f => f.endsWith(".txt"));
  const map = {};

  for (const file of files) {
    const filePath = path.join(metadataDir, file);
    const data = parseTxt(filePath);
    const route = "/" + file.replace(".txt", "").replace(/_/g, "/");
    map[route] = data;
  }

  fs.writeFileSync(outputFile, JSON.stringify(map, null, 2));
  console.log("✅ metadataMap.json generated successfully.");
}

main();
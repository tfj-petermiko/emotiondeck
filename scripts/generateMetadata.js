import fs from "fs";
import path from "path";

// 🧠 Folder z plikami .txt
const metadataDir = path.resolve("content/metadata");
// 📦 Plik wynikowy wewnątrz app/
const outputFile = path.resolve("app/metadataMap.json");

// 🧩 Funkcja parsująca każdy plik .txt
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

// 🚀 Główna funkcja
function main() {
  // Sprawdź czy folder istnieje
  if (!fs.existsSync(metadataDir)) {
    console.error(`❌ Folder ${metadataDir} nie istnieje!`);
    process.exit(1);
  }

  const files = fs.readdirSync(metadataDir).filter((f) => f.endsWith(".txt"));
  if (files.length === 0) {
    console.error("❌ Brak plików .txt w katalogu content/metadata/");
    process.exit(1);
  }

  const metadataMap = {};

  for (const file of files) {
    const key = file.replace(".txt", "");
    const fullPath = path.join(metadataDir, file);
    const parsed = parseTxt(fullPath);
    metadataMap[key] = parsed;
    console.log(`✅ Dodano: ${file}`);
  }

  // 🧠 Upewnij się, że folder app istnieje
  const appDir = path.resolve("app");
  if (!fs.existsSync(appDir)) fs.mkdirSync(appDir);

  // 💾 Zapisz wynik do app/metadataMap.json
  fs.writeFileSync(outputFile, JSON.stringify(metadataMap, null, 2), "utf-8");
  console.log(`\n🎉 Zapisano ${files.length} wpisów do ${outputFile}`);
}

main();

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

// 🌍 Base URL
const baseUrl = process.env.BASE_URL || "https://emotiondeck.com";

// 📁 Directories
const appDir = path.join(process.cwd(), "app");
const output = path.join(process.cwd(), "public", "sitemap.xml");

// 🚫 Excluded routes
const excludedRoutes = [
  "/ai-generator/checkout",
  "/ai-generator/thank-you",
  "/checkout",
  "/pro/checkout",
  "/thank-you",
  "/pro/thank-you",
  "/payment",
  "/success",
  "/page.js",
];

// 🕒 Timestamp of script execution
const runTimestamp = new Date();
const runISO = runTimestamp.toISOString();
console.log(`🕒 Sitemap generation started at: ${runISO}`);

// 🔍 Recursive scan
function getAllRoutes(dir, parentPath = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let routes = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const routePath = path.join(parentPath, entry.name);

    if (entry.isDirectory()) {
      routes = routes.concat(getAllRoutes(fullPath, routePath));
    } else if (entry.name === "page.js" || entry.name === "page.jsx") {
      const url = routePath
        .replace(/\\/g, "/")
        .replace(/\/page\.jsx?$/, "")
        .replace(/index$/, "");
      routes.push(url === "" ? "/" : `/${url}`);
    }
  }
  return routes;
}

// 🧩 Collect routes
let allRoutes = getAllRoutes(appDir);
const uniqueRoutes = [...new Set(allRoutes)]
  .filter((route) => !excludedRoutes.includes(route))
  .sort();

if (!uniqueRoutes.includes("/")) uniqueRoutes.unshift("/");

// 🕓 Get last modified date or fallback to run time
function getLastModified(route) {
  const filePath = path.join(appDir, route, "page.js");
  try {
    const stats = fs.statSync(filePath);
    // If the file was modified before the current run, use script time for freshness
    return stats.mtime > runTimestamp ? stats.mtime.toISOString() : runISO;
  } catch {
    return runISO;
  }
}

// 🧭 Priority logic
function getPriority(route) {
  if (route === "/") return "1.0";
  if (
    ["/free", "/pro", "/learn", "/globalmap", "/ai-generator"].includes(route)
  )
    return "0.9";
  if (route.startsWith("/learn/quizzes") || route.startsWith("/free/phase"))
    return "0.8";
  if (route.startsWith("/legal")) return "0.6";
  return "0.7";
}

// 🧾 Generate sitemap
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueRoutes
  .map((route) => {
    const absoluteUrl = new URL(route, baseUrl).href;
    const lastmod = getLastModified(route);
    const priority = getPriority(route);

    return `  <url>
    <loc>${absoluteUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;

// 💾 Write file
fs.writeFileSync(output, sitemap);

console.log("==============================================");
console.log("✅ EmotionDeck Sitemap successfully generated!");
console.log(`🌍 Total routes: ${uniqueRoutes.length}`);
console.log(`🕓 Run timestamp used as freshness marker: ${runISO}`);
console.log(`📦 Output file: ${output}`);
console.log("==============================================");
if (uniqueRoutes.includes("/"))
  console.log("🏠 Added homepage: https://emotiondeck.com/");

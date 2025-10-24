import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

// 🌍 Base URL of your website
const baseUrl = process.env.BASE_URL || "https://emotiondeck.com";

// 📁 App directory to scan
const appDir = path.join(process.cwd(), "app");

// 📄 Output file
const output = path.join(process.cwd(), "public", "sitemap.xml");

// 🚫 Excluded (non-public) routes
const excludedRoutes = [
  "/ai-generator/checkout",
  "/ai-generator/thank-you",
  "/checkout",
  "/thank-you",
  "/payment",
  "/success",
  "/page.js",
];

// 🔍 Recursive scan of app/ directory to find all page.js or page.jsx files
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

// 🧩 Collect and clean routes
let allRoutes = getAllRoutes(appDir);

const uniqueRoutes = [...new Set(allRoutes)]
  .filter((route) => !excludedRoutes.includes(route))
  .sort();

// ✅ Always include homepage
if (!uniqueRoutes.includes("/")) uniqueRoutes.unshift("/");

// 🕓 Get last modified date of each page
function getLastModified(route) {
  const filePath = path.join(appDir, route, "page.js");
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime.toISOString();
  } catch {
    return new Date().toISOString();
  }
}

// 🧭 Priority logic (SEO-optimised)
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

// 🧾 Generate XML sitemap content
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

// 💾 Write the XML file
fs.writeFileSync(output, sitemap);

console.log("==============================================");
console.log("✅ EmotionDeck Sitemap successfully generated!");
console.log(`🌍 Total routes: ${uniqueRoutes.length}`);
console.log(`📦 Output file: ${output}`);
console.log("==============================================");
if (uniqueRoutes.includes("/")) console.log("🏠 Added homepage: https://emotiondeck.com/");

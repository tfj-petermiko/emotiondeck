import fs from "fs";
import path from "path";
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

// 🕓 Current generation timestamp
const generationDate = new Date().toISOString();

// 🔍 Recursive scan to find page.js/.jsx files
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

// 🏠 Include homepage
if (!uniqueRoutes.includes("/")) uniqueRoutes.unshift("/");

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

// 🧾 Generate sitemap XML
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<!-- EmotionDeck Sitemap -->
<!-- Verified: ${generationDate} -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueRoutes
  .map((route) => {
    const absoluteUrl = new URL(route, baseUrl).href;
    const priority = getPriority(route);
    return `  <url>
    <loc>${absoluteUrl}</loc>
    <lastmod>${generationDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;

// 💾 Write sitemap
fs.writeFileSync(output, sitemapContent, "utf-8");

// ✅ Log summary
console.log("==============================================");
console.log("✅ EmotionDeck Sitemap regenerated with fresh timestamps!");
console.log(`🕓 All <lastmod> set to: ${generationDate}`);
console.log(`🌍 Total routes: ${uniqueRoutes.length}`);
console.log(`📦 Output: ${output}`);
console.log("==============================================");

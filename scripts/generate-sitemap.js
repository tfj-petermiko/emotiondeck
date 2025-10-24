import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

// 🧭 Base URL (from .env or fallback)
const baseUrl = process.env.BASE_URL || "https://emotiondeck.com";
const appDir = path.join(process.cwd(), "app");
const output = path.join(process.cwd(), "public", "sitemap.xml");

// ❌ Excluded routes
const excludedRoutes = [
  "/ai-generator/checkout",
  "/ai-generator/thank-you",
  "/checkout",
  "/thank-you",
  "/payment",
  "/success",
];

// 🔍 Recursively scans /app for page.js or page.jsx files
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

// 🧩 Collect all routes
let allRoutes = getAllRoutes(appDir);

// 🧹 Filter duplicates & excluded
const uniqueRoutes = [...new Set(allRoutes)]
  .filter((route) => !excludedRoutes.includes(route))
  .sort();

// ⚙️ Calculate last modified date of each page
function getLastModified(route) {
  const filePath = path.join(appDir, route, "page.js");
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime.toISOString();
  } catch {
    return new Date().toISOString(); // fallback
  }
}

// 🧮 Determine priority by depth
function getPriority(route) {
  if (route === "/") return "1.0";
  const depth = route.split("/").length - 1;
  if (depth === 1) return "0.9";
  if (depth === 2) return "0.7";
  return "0.5";
}

// 🧾 Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueRoutes
  .map((route) => {
    const absoluteUrl = new URL(route, baseUrl).href;
    const lastmod = getLastModified(route);
    const priority = getPriority(route);

    return `
  <url>
    <loc>${absoluteUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("")}
</urlset>`;

// 💾 Write sitemap
fs.writeFileSync(output, sitemap);
console.log(`✅ Sitemap generated successfully with ${uniqueRoutes.length} routes → public/sitemap.xml`);

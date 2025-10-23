import fs from "fs";
import path from "path";

const baseUrl = "https://emotiondeck.com";
const appDir = path.join(process.cwd(), "app");
const output = path.join(process.cwd(), "public", "sitemap.xml");

// ❌ Excluded routes (add more if needed)
const excludedRoutes = [
  "/ai-generator/checkout",
  "/ai-generator/thank-you",
  "/checkout",
  "/thank-you",
  "/payment",
  "/success",
];

// 🔍 Recursively scans the /app directory for all page.js or page.jsx files
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

// 🧩 Collect all routes from /app
let allRoutes = getAllRoutes(appDir);

// 🧹 Remove duplicates and excluded ones
const uniqueRoutes = [...new Set(allRoutes)]
  .filter((route) => !excludedRoutes.includes(route))
  .sort();

// 🧾 Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueRoutes
  .map(
    (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

// 💾 Save sitemap to /public/sitemap.xml
fs.writeFileSync(output, sitemap);
console.log("✅ Sitemap generated successfully at public/sitemap.xml");

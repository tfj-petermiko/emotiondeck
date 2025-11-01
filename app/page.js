import fs from "fs";
import path from "path";
import HomeClient from "./HomeClient";

export default function HomePage() {
  const filePath = path.join(process.cwd(), "public/content/home/index.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(jsonData);

  return <HomeClient data={data} />;
}

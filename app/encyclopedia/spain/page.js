import fs from "fs";
import path from "path";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function SpainPage() {
  const filePath = path.join(
    process.cwd(),
    "public/content/encyclopedia/countries/spain.json"
  );

  const jsonData = fs.readFileSync(filePath, "utf8");
  const countryData = JSON.parse(jsonData);

  return <CountryPageTemplate data={countryData} />;
}

import fs from "fs";
import path from "path";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function UnitedArabEmiratesPage() {
  const filePath = path.join(
    process.cwd(),
    "public/content/encyclopedia/countries/united_arab_emirates.json"
  );

  const jsonData = fs.readFileSync(filePath, "utf8");
  const countryData = JSON.parse(jsonData);

  return <CountryPageTemplate data={countryData} />;
}

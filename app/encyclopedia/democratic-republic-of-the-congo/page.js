import fs from "fs";
import path from "path";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function DemocraticRepublicOfTheCongoPage() {
  const filePath = path.join(
    process.cwd(),
    "public/content/encyclopedia/countries/democratic_republic_of_the_congo.json"
  );

  const jsonData = fs.readFileSync(filePath, "utf8");
  const countryData = JSON.parse(jsonData);

  return <CountryPageTemplate data={countryData} />;
}

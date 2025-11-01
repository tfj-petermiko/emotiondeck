import fs from "fs";
import path from "path";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function BotswanaPage() {
  const filePath = path.join(
    process.cwd(),
    "public/content/encyclopedia/countries/botswana.json"
  );

  const jsonData = fs.readFileSync(filePath, "utf8");
  const countryData = JSON.parse(jsonData);

  return <CountryPageTemplate data={countryData} />;
}

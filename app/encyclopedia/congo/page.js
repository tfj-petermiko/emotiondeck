
import countryData from "../../content/countries/congo.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function CongoPage() {
  return <CountryPageTemplate data={countryData} />;
}

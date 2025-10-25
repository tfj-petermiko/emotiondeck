
import countryData from "../../content/countries/guatemala.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function GuatemalaPage() {
  return <CountryPageTemplate data={countryData} />;
}

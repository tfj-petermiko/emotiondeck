
import countryData from "../../content/countries/northern_mariana_islands.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function NorthernMarianaIslandsPage() {
  return <CountryPageTemplate data={countryData} />;
}

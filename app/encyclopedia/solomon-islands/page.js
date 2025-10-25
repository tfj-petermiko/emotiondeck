
import countryData from "../../content/countries/solomon_islands.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function SolomonIslandsPage() {
  return <CountryPageTemplate data={countryData} />;
}

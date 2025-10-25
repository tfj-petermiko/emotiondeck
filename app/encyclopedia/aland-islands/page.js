
import countryData from "../../content/countries/aland_islands.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function AlandIslandsPage() {
  return <CountryPageTemplate data={countryData} />;
}

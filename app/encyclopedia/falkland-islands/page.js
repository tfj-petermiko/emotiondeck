
import countryData from "../../content/countries/falkland_islands.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function FalklandIslandsPage() {
  return <CountryPageTemplate data={countryData} />;
}

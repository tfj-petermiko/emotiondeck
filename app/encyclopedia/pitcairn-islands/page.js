
import countryData from "../../content/countries/pitcairn_islands.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function PitcairnIslandsPage() {
  return <CountryPageTemplate data={countryData} />;
}

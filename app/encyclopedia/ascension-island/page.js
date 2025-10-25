
import countryData from "../../content/countries/ascension_island.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function AscensionIslandPage() {
  return <CountryPageTemplate data={countryData} />;
}

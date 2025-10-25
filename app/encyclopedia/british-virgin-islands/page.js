
import countryData from "../../content/countries/british_virgin_islands.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function BritishVirginIslandsPage() {
  return <CountryPageTemplate data={countryData} />;
}

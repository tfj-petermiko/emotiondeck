
import countryData from "../../content/countries/faroe_islands.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function FaroeIslandsPage() {
  return <CountryPageTemplate data={countryData} />;
}

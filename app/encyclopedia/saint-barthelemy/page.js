
import countryData from "../../content/countries/saint_barthelemy.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function SaintBarthelemyPage() {
  return <CountryPageTemplate data={countryData} />;
}

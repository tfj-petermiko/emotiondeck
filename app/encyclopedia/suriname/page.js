
import countryData from "../../content/countries/suriname.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function SurinamePage() {
  return <CountryPageTemplate data={countryData} />;
}

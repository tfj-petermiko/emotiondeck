
import countryData from "../../content/countries/ecuador.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function EcuadorPage() {
  return <CountryPageTemplate data={countryData} />;
}

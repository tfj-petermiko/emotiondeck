
import countryData from "../../content/countries/guadeloupe.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function GuadeloupePage() {
  return <CountryPageTemplate data={countryData} />;
}

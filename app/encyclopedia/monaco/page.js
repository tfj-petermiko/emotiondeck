
import countryData from "../../content/countries/monaco.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function MonacoPage() {
  return <CountryPageTemplate data={countryData} />;
}

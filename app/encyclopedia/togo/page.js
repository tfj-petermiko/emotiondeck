
import countryData from "../../content/countries/togo.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function TogoPage() {
  return <CountryPageTemplate data={countryData} />;
}

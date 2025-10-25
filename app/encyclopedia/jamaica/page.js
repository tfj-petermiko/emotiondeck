
import countryData from "../../content/countries/jamaica.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function JamaicaPage() {
  return <CountryPageTemplate data={countryData} />;
}

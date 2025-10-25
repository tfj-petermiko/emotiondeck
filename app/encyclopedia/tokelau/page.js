
import countryData from "../../content/countries/tokelau.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function TokelauPage() {
  return <CountryPageTemplate data={countryData} />;
}

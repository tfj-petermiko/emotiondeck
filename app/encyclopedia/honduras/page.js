
import countryData from "../../content/countries/honduras.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function HondurasPage() {
  return <CountryPageTemplate data={countryData} />;
}

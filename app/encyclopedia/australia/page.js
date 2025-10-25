
import countryData from "../../content/countries/australia.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function AustraliaPage() {
  return <CountryPageTemplate data={countryData} />;
}


import countryData from "../../content/countries/netherlands.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function NetherlandsPage() {
  return <CountryPageTemplate data={countryData} />;
}

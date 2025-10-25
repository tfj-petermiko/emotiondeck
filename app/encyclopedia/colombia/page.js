
import countryData from "../../content/countries/colombia.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function ColombiaPage() {
  return <CountryPageTemplate data={countryData} />;
}

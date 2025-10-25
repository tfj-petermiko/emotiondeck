
import countryData from "../../content/countries/zambia.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function ZambiaPage() {
  return <CountryPageTemplate data={countryData} />;
}


import countryData from "../../content/countries/romania.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function RomaniaPage() {
  return <CountryPageTemplate data={countryData} />;
}

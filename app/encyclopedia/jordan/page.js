
import countryData from "../../content/countries/jordan.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function JordanPage() {
  return <CountryPageTemplate data={countryData} />;
}


import countryData from "../../content/countries/japan.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function JapanPage() {
  return <CountryPageTemplate data={countryData} />;
}

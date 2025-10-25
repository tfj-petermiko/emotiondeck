
import countryData from "../../content/countries/turkey.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function TurkeyPage() {
  return <CountryPageTemplate data={countryData} />;
}

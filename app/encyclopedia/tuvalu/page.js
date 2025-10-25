
import countryData from "../../content/countries/tuvalu.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function TuvaluPage() {
  return <CountryPageTemplate data={countryData} />;
}

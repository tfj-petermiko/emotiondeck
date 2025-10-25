
import countryData from "../../content/countries/haiti.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function HaitiPage() {
  return <CountryPageTemplate data={countryData} />;
}

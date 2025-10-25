
import countryData from "../../content/countries/syria.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function SyriaPage() {
  return <CountryPageTemplate data={countryData} />;
}

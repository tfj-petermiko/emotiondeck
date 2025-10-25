
import countryData from "../../content/countries/iceland.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function IcelandPage() {
  return <CountryPageTemplate data={countryData} />;
}

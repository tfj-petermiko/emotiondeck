
import countryData from "../../content/countries/niue.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function NiuePage() {
  return <CountryPageTemplate data={countryData} />;
}

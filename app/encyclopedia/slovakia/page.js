
import countryData from "../../content/countries/slovakia.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function SlovakiaPage() {
  return <CountryPageTemplate data={countryData} />;
}

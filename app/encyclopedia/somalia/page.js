
import countryData from "../../content/countries/somalia.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function SomaliaPage() {
  return <CountryPageTemplate data={countryData} />;
}

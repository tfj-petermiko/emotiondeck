
import countryData from "../../content/countries/niger.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function NigerPage() {
  return <CountryPageTemplate data={countryData} />;
}

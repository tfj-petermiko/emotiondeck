
import countryData from "../../content/countries/ghana.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function GhanaPage() {
  return <CountryPageTemplate data={countryData} />;
}

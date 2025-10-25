
import countryData from "../../content/countries/seychelles.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function SeychellesPage() {
  return <CountryPageTemplate data={countryData} />;
}


import countryData from "../../content/countries/egypt.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function EgyptPage() {
  return <CountryPageTemplate data={countryData} />;
}

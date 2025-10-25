
import countryData from "../../content/countries/eritrea.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function EritreaPage() {
  return <CountryPageTemplate data={countryData} />;
}

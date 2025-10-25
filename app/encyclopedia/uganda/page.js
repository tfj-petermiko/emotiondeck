
import countryData from "../../content/countries/uganda.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function UgandaPage() {
  return <CountryPageTemplate data={countryData} />;
}


import countryData from "../../content/countries/canada.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function CanadaPage() {
  return <CountryPageTemplate data={countryData} />;
}

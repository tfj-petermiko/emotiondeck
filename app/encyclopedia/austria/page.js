
import countryData from "../../content/countries/austria.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function AustriaPage() {
  return <CountryPageTemplate data={countryData} />;
}

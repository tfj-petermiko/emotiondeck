
import countryData from "../../content/countries/senegal.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function SenegalPage() {
  return <CountryPageTemplate data={countryData} />;
}

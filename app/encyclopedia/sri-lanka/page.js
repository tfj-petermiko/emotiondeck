
import countryData from "../../content/countries/sri_lanka.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function SriLankaPage() {
  return <CountryPageTemplate data={countryData} />;
}


import countryData from "../../content/countries/cambodia.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function CambodiaPage() {
  return <CountryPageTemplate data={countryData} />;
}


import countryData from "../../content/countries/el_salvador.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function ElSalvadorPage() {
  return <CountryPageTemplate data={countryData} />;
}

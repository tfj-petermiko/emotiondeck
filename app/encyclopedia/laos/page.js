
import countryData from "../../content/countries/laos.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function LaosPage() {
  return <CountryPageTemplate data={countryData} />;
}

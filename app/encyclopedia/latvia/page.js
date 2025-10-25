
import countryData from "../../content/countries/latvia.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function LatviaPage() {
  return <CountryPageTemplate data={countryData} />;
}

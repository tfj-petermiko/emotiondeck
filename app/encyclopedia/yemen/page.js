
import countryData from "../../content/countries/yemen.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function YemenPage() {
  return <CountryPageTemplate data={countryData} />;
}

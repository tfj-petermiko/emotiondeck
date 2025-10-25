
import countryData from "../../content/countries/namibia.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function NamibiaPage() {
  return <CountryPageTemplate data={countryData} />;
}

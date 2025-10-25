
import countryData from "../../content/countries/italy.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function ItalyPage() {
  return <CountryPageTemplate data={countryData} />;
}

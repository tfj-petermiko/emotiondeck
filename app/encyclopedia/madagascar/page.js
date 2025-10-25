
import countryData from "../../content/countries/madagascar.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function MadagascarPage() {
  return <CountryPageTemplate data={countryData} />;
}

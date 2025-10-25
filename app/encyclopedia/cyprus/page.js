
import countryData from "../../content/countries/cyprus.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function CyprusPage() {
  return <CountryPageTemplate data={countryData} />;
}

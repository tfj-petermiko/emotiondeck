
import countryData from "../../content/countries/maldives.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function MaldivesPage() {
  return <CountryPageTemplate data={countryData} />;
}

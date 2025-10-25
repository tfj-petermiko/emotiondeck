
import countryData from "../../content/countries/france.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function FrancePage() {
  return <CountryPageTemplate data={countryData} />;
}

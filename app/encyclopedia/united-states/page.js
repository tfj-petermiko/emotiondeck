
import countryData from "../../content/countries/united_states.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function UnitedStatesPage() {
  return <CountryPageTemplate data={countryData} />;
}

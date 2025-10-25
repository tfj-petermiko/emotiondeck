
import countryData from "../../content/countries/greece.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function GreecePage() {
  return <CountryPageTemplate data={countryData} />;
}

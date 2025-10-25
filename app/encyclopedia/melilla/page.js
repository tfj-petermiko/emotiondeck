
import countryData from "../../content/countries/melilla.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function MelillaPage() {
  return <CountryPageTemplate data={countryData} />;
}

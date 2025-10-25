
import countryData from "../../content/countries/qatar.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function QatarPage() {
  return <CountryPageTemplate data={countryData} />;
}


import countryData from "../../content/countries/andorra.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function AndorraPage() {
  return <CountryPageTemplate data={countryData} />;
}

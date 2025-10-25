
import countryData from "../../content/countries/albania.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function AlbaniaPage() {
  return <CountryPageTemplate data={countryData} />;
}

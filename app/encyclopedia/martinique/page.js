
import countryData from "../../content/countries/martinique.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function MartiniquePage() {
  return <CountryPageTemplate data={countryData} />;
}

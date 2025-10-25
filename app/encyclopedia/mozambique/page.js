
import countryData from "../../content/countries/mozambique.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function MozambiquePage() {
  return <CountryPageTemplate data={countryData} />;
}

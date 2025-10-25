
import countryData from "../../content/countries/singapore.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function SingaporePage() {
  return <CountryPageTemplate data={countryData} />;
}

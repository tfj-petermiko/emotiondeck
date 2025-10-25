
import countryData from "../../content/countries/sierra_leone.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function SierraLeonePage() {
  return <CountryPageTemplate data={countryData} />;
}


import countryData from "../../content/countries/luxembourg.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function LuxembourgPage() {
  return <CountryPageTemplate data={countryData} />;
}

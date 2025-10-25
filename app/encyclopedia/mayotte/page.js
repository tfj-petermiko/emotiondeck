
import countryData from "../../content/countries/mayotte.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function MayottePage() {
  return <CountryPageTemplate data={countryData} />;
}


import countryData from "../../content/countries/uzbekistan.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function UzbekistanPage() {
  return <CountryPageTemplate data={countryData} />;
}

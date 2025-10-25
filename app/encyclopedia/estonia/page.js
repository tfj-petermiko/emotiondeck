
import countryData from "../../content/countries/estonia.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function EstoniaPage() {
  return <CountryPageTemplate data={countryData} />;
}

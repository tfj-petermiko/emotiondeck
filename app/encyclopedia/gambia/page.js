
import countryData from "../../content/countries/gambia.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function GambiaPage() {
  return <CountryPageTemplate data={countryData} />;
}

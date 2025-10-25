
import countryData from "../../content/countries/india.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function IndiaPage() {
  return <CountryPageTemplate data={countryData} />;
}

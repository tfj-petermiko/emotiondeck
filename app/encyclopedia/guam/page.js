
import countryData from "../../content/countries/guam.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function GuamPage() {
  return <CountryPageTemplate data={countryData} />;
}

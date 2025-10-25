
import countryData from "../../content/countries/libya.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function LibyaPage() {
  return <CountryPageTemplate data={countryData} />;
}

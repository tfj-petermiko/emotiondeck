
import countryData from "../../content/countries/angola.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function AngolaPage() {
  return <CountryPageTemplate data={countryData} />;
}

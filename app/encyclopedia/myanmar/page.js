
import countryData from "../../content/countries/myanmar.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function MyanmarPage() {
  return <CountryPageTemplate data={countryData} />;
}

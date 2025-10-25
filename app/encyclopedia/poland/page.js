
import countryData from "../../content/countries/poland.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function PolandPage() {
  return <CountryPageTemplate data={countryData} />;
}

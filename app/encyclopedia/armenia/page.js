
import countryData from "../../content/countries/armenia.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function ArmeniaPage() {
  return <CountryPageTemplate data={countryData} />;
}

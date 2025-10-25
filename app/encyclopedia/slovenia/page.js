
import countryData from "../../content/countries/slovenia.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function SloveniaPage() {
  return <CountryPageTemplate data={countryData} />;
}

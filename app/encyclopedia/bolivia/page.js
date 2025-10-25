
import countryData from "../../content/countries/bolivia.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function BoliviaPage() {
  return <CountryPageTemplate data={countryData} />;
}

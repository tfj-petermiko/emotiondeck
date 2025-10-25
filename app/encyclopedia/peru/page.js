
import countryData from "../../content/countries/peru.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function PeruPage() {
  return <CountryPageTemplate data={countryData} />;
}

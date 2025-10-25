
import countryData from "../../content/countries/bulgaria.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function BulgariaPage() {
  return <CountryPageTemplate data={countryData} />;
}

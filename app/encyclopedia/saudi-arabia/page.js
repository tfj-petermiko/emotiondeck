
import countryData from "../../content/countries/saudi_arabia.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function SaudiArabiaPage() {
  return <CountryPageTemplate data={countryData} />;
}

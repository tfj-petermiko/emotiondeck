
import countryData from "../../content/countries/kiribati.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function KiribatiPage() {
  return <CountryPageTemplate data={countryData} />;
}

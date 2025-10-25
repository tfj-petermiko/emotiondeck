
import countryData from "../../content/countries/liberia.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function LiberiaPage() {
  return <CountryPageTemplate data={countryData} />;
}

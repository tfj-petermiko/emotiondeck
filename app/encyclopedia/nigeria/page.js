
import countryData from "../../content/countries/nigeria.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function NigeriaPage() {
  return <CountryPageTemplate data={countryData} />;
}

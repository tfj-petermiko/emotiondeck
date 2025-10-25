
import countryData from "../../content/countries/turks_and_caicos.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function TurksandCaicosPage() {
  return <CountryPageTemplate data={countryData} />;
}

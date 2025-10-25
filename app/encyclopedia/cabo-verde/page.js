
import countryData from "../../content/countries/cabo_verde.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function CaboVerdePage() {
  return <CountryPageTemplate data={countryData} />;
}

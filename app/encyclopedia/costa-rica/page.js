
import countryData from "../../content/countries/costa_rica.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function CostaRicaPage() {
  return <CountryPageTemplate data={countryData} />;
}

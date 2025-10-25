
import countryData from "../../content/countries/burkina_faso.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function BurkinaFasoPage() {
  return <CountryPageTemplate data={countryData} />;
}

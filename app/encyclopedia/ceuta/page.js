
import countryData from "../../content/countries/ceuta.json";
import CountryPageTemplate from "../../components/encyclopedia/CountryPageTemplate";
import { baseButtonStyle } from "../../styles/buttonStyle";

export default function CeutaPage() {
  return <CountryPageTemplate data={countryData} />;
}
